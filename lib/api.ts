const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000").replace(/\/+$/, "");

export const AUTH_STATUS_STORAGE_KEY = "visiox_auth";
export const AUTH_TOKEN_STORAGE_KEY = "visiox_token";
export const AUTH_REFRESH_TOKEN_STORAGE_KEY = "visiox_refresh_token";
export const AUTH_USER_STORAGE_KEY = "visiox_user";

const COLOR_PALETTE = [
  "#ff7300",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#ef4444",
  "#06b6d4",
];

class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toFiniteNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

function pickString(record: JsonRecord, keys: string[], fallback = ""): string {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) {
      return value;
    }
  }
  return fallback;
}

function pickNumber(record: JsonRecord, keys: string[], fallback = 0): number {
  for (const key of keys) {
    const parsed = toFiniteNumber(record[key]);
    if (parsed !== null) return parsed;
  }
  return fallback;
}

function hashColorSeed(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return COLOR_PALETTE[Math.abs(hash) % COLOR_PALETTE.length];
}

function getStoredToken(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) ?? "";
}

function getStoredRefreshToken(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(AUTH_REFRESH_TOKEN_STORAGE_KEY) ?? "";
}

function buildHeaders(initHeaders?: HeadersInit, body?: BodyInit | null, includeAuth = true): Headers {
  const headers = new Headers(initHeaders);
  const isFormData = typeof FormData !== "undefined" && body instanceof FormData;

  if (!isFormData && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (includeAuth && !headers.has("Authorization")) {
    const token = getStoredToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  return headers;
}

async function parseJsonSafe(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return null;

  try {
    return await response.json();
  } catch {
    return null;
  }
}

function resolveErrorMessage(payload: unknown, fallback: string): string {
  if (isRecord(payload)) {
    const direct = pickString(payload, ["message", "error", "detail", "non_field_errors"], "");
    if (direct) return direct;
  }
  return fallback;
}

async function apiRequest<T>(path: string, init: RequestInit & { auth?: boolean } = {}): Promise<T> {
  const { auth = true, headers, ...rest } = init;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: buildHeaders(headers, rest.body, auth),
    cache: "no-store",
  });

  const payload = await parseJsonSafe(response);
  if (!response.ok) {
    throw new ApiError(
      resolveErrorMessage(payload, `Request failed with status ${response.status}`),
      response.status,
    );
  }

  return payload as T;
}

function toAbsoluteApiUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  if (pathOrUrl.startsWith("/")) return `${API_BASE_URL}${pathOrUrl}`;
  return `${API_BASE_URL}/${pathOrUrl}`;
}

async function apiRequestByUrl<T>(url: string, init: RequestInit & { auth?: boolean } = {}): Promise<T> {
  const { auth = true, headers, ...rest } = init;
  const response = await fetch(toAbsoluteApiUrl(url), {
    ...rest,
    headers: buildHeaders(headers, rest.body, auth),
    cache: "no-store",
  });

  const payload = await parseJsonSafe(response);
  if (!response.ok) {
    throw new ApiError(
      resolveErrorMessage(payload, `Request failed with status ${response.status}`),
      response.status,
    );
  }

  return payload as T;
}

async function apiRequestAllPages(path: string, init: RequestInit & { auth?: boolean } = {}): Promise<JsonRecord[]> {
  const rows: JsonRecord[] = [];
  let nextUrl: string | null = path;

  while (nextUrl) {
    const payload: unknown = await apiRequestByUrl(nextUrl, init);

    if (Array.isArray(payload)) {
      rows.push(...payload.filter(isRecord));
      break;
    }

    if (isRecord(payload) && Array.isArray(payload.results)) {
      rows.push(...payload.results.filter(isRecord));
      nextUrl = typeof payload.next === "string" && payload.next ? payload.next : null;
      continue;
    }

    rows.push(...extractCollection(payload));
    break;
  }

  return rows;
}

function extractCollection(payload: unknown): JsonRecord[] {
  if (Array.isArray(payload)) return payload.filter(isRecord);

  if (isRecord(payload)) {
    if (Array.isArray(payload.results)) return payload.results.filter(isRecord);
    if (Array.isArray(payload.data)) return payload.data.filter(isRecord);
  }

  return [];
}

function extractRecord(payload: unknown): JsonRecord | null {
  if (isRecord(payload)) {
    if (isRecord(payload.data)) return payload.data;
    return payload;
  }
  return null;
}

function ensureTrailingSlash(path: string): string {
  if (path.endsWith("/")) return path;
  return `${path}/`;
}

function toIsoOrNow(value: string): string {
  if (!value) return new Date().toISOString();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

export interface AuthUser {
  id?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
}

export interface LoginResponse {
  token: string;
  refreshToken?: string;
  user?: AuthUser;
}

export interface DatasetClassDatum {
  id?: string;
  name: string;
  count: number;
  color?: string;
}

export interface Dataset {
  id: string;
  projectId?: string;
  name: string;
  description: string;
  imageCount: number;
  classCount: number;
  versionNumber: number;
  updatedAt: string;
  status: string;
  previewUrl?: string;
}

export interface DatasetDetail extends Dataset {
  annotatedPercent: number;
  healthScore: number;
  classDistribution: DatasetClassDatum[];
}

export interface DatasetImage {
  id: string;
  datasetId?: string;
  name: string;
  url: string;
  labelCount: number;
  width?: number;
  height?: number;
  uploadedAt?: string;
}

export interface DatasetVersion {
  id: string;
  name: string;
  images: number;
  annotations: number;
  created: string;
  status: string;
  exportFormats: string[];
}

export interface ImageAsset {
  id: string;
  datasetId?: string;
  name: string;
  url: string;
  width?: number;
  height?: number;
}

export interface Annotation {
  id: string;
  label: string;
  color: string;
  points?: number[][];
  bbox?: number[];
  classId?: string;
  mediaId?: string;
  type?: string;
  data?: JsonRecord;
}

interface VisioxClass {
  id: string;
  projectId: string;
  name: string;
  color: string;
  annotationCount: number;
}

function normalizeUser(payload: JsonRecord): AuthUser {
  const firstName = pickString(payload, ["first_name", "firstName"], "");
  const lastName = pickString(payload, ["last_name", "lastName"], "");
  const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();

  return {
    id: pickString(payload, ["user_id", "id"], "") || undefined,
    username: pickString(payload, ["username"], "") || undefined,
    email: pickString(payload, ["email"], "") || undefined,
    firstName: firstName || undefined,
    lastName: lastName || undefined,
    name: fullName || undefined,
  };
}

function normalizeDataset(raw: JsonRecord): Dataset {
  const id = String(pickNumber(raw, ["id"], 0) || pickString(raw, ["id"], ""));
  const projectId = String(pickNumber(raw, ["project"], 0) || pickString(raw, ["project"], ""));
  const name = pickString(raw, ["name"], "Untitled Dataset");
  const description = pickString(raw, ["description"], "");
  const imageCount = pickNumber(raw, ["media_count"], 0);
  const versionNumber = pickNumber(raw, ["version"], 1);
  const updatedAt = toIsoOrNow(pickString(raw, ["updated_at", "updatedAt", "created_at"], ""));

  return {
    id,
    projectId: projectId || undefined,
    name,
    description,
    imageCount,
    classCount: 0,
    versionNumber,
    updatedAt,
    status: "Ready",
  };
}

function normalizeClass(raw: JsonRecord): VisioxClass {
  return {
    id: String(pickNumber(raw, ["id"], 0) || pickString(raw, ["id"], "")),
    projectId: String(pickNumber(raw, ["project"], 0) || pickString(raw, ["project"], "")),
    name: pickString(raw, ["name"], "Class"),
    color: pickString(raw, ["color"], "") || hashColorSeed(pickString(raw, ["name"], "class")),
    annotationCount: pickNumber(raw, ["annotation_count", "annotationCount"], 0),
  };
}

function normalizeMedia(raw: JsonRecord): DatasetImage {
  const id = String(pickNumber(raw, ["id"], 0) || pickString(raw, ["id"], ""));
  const datasetId = String(pickNumber(raw, ["dataset"], 0) || pickString(raw, ["dataset"], ""));
  const originalFilename = pickString(raw, ["original_filename"], "");
  const name = originalFilename || pickString(raw, ["name", "file"], `media-${id}`);
  const fileUrl = pickString(raw, ["file_url", "url", "file"], "");

  return {
    id,
    datasetId: datasetId || undefined,
    name,
    url: fileUrl || `https://picsum.photos/seed/${id}/1200/800`,
    labelCount: 0,
    width: toFiniteNumber(raw.width) ?? undefined,
    height: toFiniteNumber(raw.height) ?? undefined,
    uploadedAt: pickString(raw, ["uploaded_at"], "") || undefined,
  };
}

function toBBoxFromData(data: unknown): number[] | undefined {
  if (!isRecord(data)) return undefined;

  const x = toFiniteNumber(data.x) ?? toFiniteNumber(data.left);
  const y = toFiniteNumber(data.y) ?? toFiniteNumber(data.top);
  const width = toFiniteNumber(data.width) ?? toFiniteNumber(data.w);
  const height = toFiniteNumber(data.height) ?? toFiniteNumber(data.h);

  if (
    x !== null &&
    y !== null &&
    width !== null &&
    height !== null
  ) {
    return [x, y, width, height];
  }

  return undefined;
}

function normalizeAnnotation(raw: JsonRecord): Annotation {
  const className = pickString(raw, ["class_name", "label"], "Object");
  const color = pickString(raw, ["color"], "") || hashColorSeed(className);
  const data = isRecord(raw.data) ? raw.data : {};

  return {
    id: String(pickNumber(raw, ["id"], 0) || pickString(raw, ["id"], "")),
    label: className,
    color,
    classId: String(pickNumber(raw, ["class_label"], 0) || pickString(raw, ["class_label"], "")) || undefined,
    mediaId: String(pickNumber(raw, ["media"], 0) || pickString(raw, ["media"], "")) || undefined,
    type: pickString(raw, ["type"], "bbox"),
    data,
    bbox: toBBoxFromData(data),
  };
}

async function fetchProjectClasses(projectId: string): Promise<VisioxClass[]> {
  const rows = await apiRequestAllPages(
    ensureTrailingSlash(`/api/classes`) + `?project=${encodeURIComponent(projectId)}`,
  );
  return rows.map(normalizeClass);
}

async function createProjectClass(projectId: string, name: string, color: string): Promise<VisioxClass> {
  const payload = await apiRequest<unknown>(ensureTrailingSlash("/api/classes"), {
    method: "POST",
    body: JSON.stringify({
      project: Number(projectId),
      name,
      color,
      attributes: {},
    }),
  });

  const record = extractRecord(payload);
  if (!record) {
    throw new Error(`Failed to create class "${name}".`);
  }
  return normalizeClass(record);
}

export function persistAuthSession(session: LoginResponse): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_STATUS_STORAGE_KEY, "true");
  localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, session.token);
  if (session.refreshToken) {
    localStorage.setItem(AUTH_REFRESH_TOKEN_STORAGE_KEY, session.refreshToken);
  } else {
    localStorage.removeItem(AUTH_REFRESH_TOKEN_STORAGE_KEY);
  }

  if (session.user) {
    localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(session.user));
  } else {
    localStorage.removeItem(AUTH_USER_STORAGE_KEY);
  }
}

export function clearAuthSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_STATUS_STORAGE_KEY);
  localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  localStorage.removeItem(AUTH_REFRESH_TOKEN_STORAGE_KEY);
  localStorage.removeItem(AUTH_USER_STORAGE_KEY);
}

export function hasPersistedSession(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_STATUS_STORAGE_KEY) === "true" || Boolean(localStorage.getItem(AUTH_TOKEN_STORAGE_KEY));
}

export async function loginWithPassword(usernameOrEmail: string, password: string): Promise<LoginResponse> {
  const payload = await apiRequest<unknown>(ensureTrailingSlash("/api/auth/login"), {
    method: "POST",
    auth: false,
    body: JSON.stringify({ username: usernameOrEmail, password }),
  });

  const record = extractRecord(payload) ?? {};
  const accessToken = pickString(record, ["access_token", "accessToken", "token"], "");
  if (!accessToken) {
    throw new Error("Login succeeded but no access token was returned.");
  }

  return {
    token: accessToken,
    refreshToken: pickString(record, ["refresh_token", "refreshToken"], "") || undefined,
    user: normalizeUser(record),
  };
}

export async function logoutFromApi(): Promise<void> {
  const refreshToken = getStoredRefreshToken();
  if (!refreshToken) return;

  try {
    await apiRequest<unknown>(ensureTrailingSlash("/api/auth/logout"), {
      method: "POST",
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
  } catch {
    // Best-effort logout only.
  }
}

export async function fetchDatasets(): Promise<Dataset[]> {
  const rows = await apiRequestAllPages(ensureTrailingSlash("/api/datasets"));
  return rows.map(normalizeDataset);
}

export async function fetchDatasetById(datasetId: string): Promise<DatasetDetail> {
  const payload = await apiRequest<unknown>(ensureTrailingSlash(`/api/datasets/${encodeURIComponent(datasetId)}`));
  const record = extractRecord(payload);
  if (!record) {
    throw new Error(`Dataset "${datasetId}" was not found.`);
  }

  const dataset = normalizeDataset(record);
  let classDistribution: DatasetClassDatum[] = [];

  if (dataset.projectId) {
    try {
      const classes = await fetchProjectClasses(dataset.projectId);
      classDistribution = classes.map((item) => ({
        id: item.id,
        name: item.name,
        count: item.annotationCount,
        color: item.color,
      }));
    } catch {
      classDistribution = [];
    }
  }

  return {
    ...dataset,
    classCount: classDistribution.length,
    classDistribution,
    annotatedPercent: 0,
    healthScore: 0,
  };
}

export async function fetchDatasetImages(datasetId: string): Promise<DatasetImage[]> {
  const rows = await apiRequestAllPages(ensureTrailingSlash(`/api/datasets/${encodeURIComponent(datasetId)}/media`));
  return rows.map(normalizeMedia);
}

export async function fetchDatasetVersions(datasetId: string): Promise<DatasetVersion[]> {
  const dataset = await fetchDatasetById(datasetId);

  return [
    {
      id: `dataset-${dataset.id}-v${dataset.versionNumber}`,
      name: `v${dataset.versionNumber}`,
      images: dataset.imageCount,
      annotations: dataset.annotatedPercent,
      created: dataset.updatedAt,
      status: "Ready",
      exportFormats: ["COCO", "YOLOv8"],
    },
  ];
}

export async function generateDatasetVersion(
  datasetId: string,
  name: string,
  config: Record<string, unknown> = {},
): Promise<DatasetVersion> {
  void config;
  const payload = await apiRequest<unknown>(ensureTrailingSlash(`/api/datasets/${encodeURIComponent(datasetId)}/new_version`), {
    method: "POST",
    body: JSON.stringify({}),
  });

  const record = extractRecord(payload);
  if (!record) {
    throw new Error("Version creation succeeded but no payload was returned.");
  }

  const dataset = normalizeDataset(record);

  return {
    id: `dataset-${dataset.id}-v${dataset.versionNumber}`,
    name: name || `v${dataset.versionNumber}`,
    images: dataset.imageCount,
    annotations: 0,
    created: dataset.updatedAt,
    status: "Ready",
    exportFormats: ["COCO", "YOLOv8"],
  };
}

export async function fetchImageById(datasetId: string, imageId: string): Promise<ImageAsset> {
  const media = await fetchDatasetImages(datasetId);
  const found = media.find((item) => item.id === imageId);
  if (!found) {
    throw new Error(`Media "${imageId}" not found in dataset "${datasetId}".`);
  }

  return {
    id: found.id,
    datasetId: found.datasetId,
    name: found.name,
    url: found.url,
    width: found.width,
    height: found.height,
  };
}

export async function fetchAnnotations(imageId: string): Promise<Annotation[]> {
  const rows = await apiRequestAllPages(
    ensureTrailingSlash("/api/annotations") + `?media=${encodeURIComponent(imageId)}`,
  );
  return rows.map(normalizeAnnotation);
}

export async function saveAnnotations(datasetId: string, imageId: string, annotations: Annotation[]): Promise<void> {
  const numericMediaId = Number(imageId);
  if (!Number.isFinite(numericMediaId)) {
    throw new Error("Visiox backend expects numeric media IDs.");
  }

  const dataset = await fetchDatasetById(datasetId);
  if (!dataset.projectId) {
    throw new Error("Dataset project ID is required to save annotations.");
  }

  const existingRows = await apiRequestAllPages(
    ensureTrailingSlash("/api/annotations") + `?media=${encodeURIComponent(imageId)}`,
  );
  const existingIds = existingRows
    .map((item) => pickNumber(item, ["id"], 0))
    .filter((id) => id > 0);

  if (existingIds.length > 0) {
    await apiRequest<unknown>(ensureTrailingSlash("/api/annotations/bulk-delete"), {
      method: "DELETE",
      body: JSON.stringify({ ids: existingIds }),
    });
  }

  if (annotations.length === 0) return;

  const classes = await fetchProjectClasses(dataset.projectId);
  const classMap = new Map<string, VisioxClass>();
  for (const classItem of classes) {
    classMap.set(classItem.name.toLowerCase(), classItem);
  }

  const ensureClass = async (label: string, color: string): Promise<VisioxClass> => {
    const key = label.toLowerCase();
    const existing = classMap.get(key);
    if (existing) return existing;

    const created = await createProjectClass(dataset.projectId as string, label, color);
    classMap.set(key, created);
    return created;
  };

  const createRows: JsonRecord[] = [];
  for (const annotation of annotations) {
    const label = annotation.label || "Object";
    const color = annotation.color || hashColorSeed(label);
    const box = annotation.bbox;
    if (!box || box.length < 4) continue;

    const classItem = await ensureClass(label, color);
    createRows.push({
      media: numericMediaId,
      class_label: Number(classItem.id),
      type: "bbox",
      data: {
        x: box[0],
        y: box[1],
        width: box[2],
        height: box[3],
      },
      is_valid: true,
    });
  }

  if (createRows.length === 0) return;

  await apiRequest<unknown>(ensureTrailingSlash("/api/annotations/bulk"), {
    method: "POST",
    body: JSON.stringify({ annotations: createRows }),
  });
}
