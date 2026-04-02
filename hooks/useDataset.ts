"use client";

import { useState, useCallback, useEffect } from "react";
import {
  DatasetDetail,
  DatasetImage,
  DatasetVersion,
  fetchDatasetById,
  fetchDatasetImages,
  fetchDatasetVersions,
  generateDatasetVersion,
} from "@/lib/api";
import { generateMockImages } from "@/lib/mock-data";

const FALLBACK_IMAGES = 100;

function buildFallbackVersions(images: number): DatasetVersion[] {
  return [
    {
      id: "v1",
      name: "v1-baseline",
      images,
      annotations: 84,
      created: new Date().toISOString(),
      status: "Ready",
      exportFormats: ["YOLOv8", "COCO", "Pascal VOC"],
    },
  ];
}

export function useDataset(id: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dataset, setDataset] = useState<DatasetDetail | null>(null);
  const [images, setImages] = useState<DatasetImage[]>([]);
  const [versions, setVersions] = useState<DatasetVersion[]>([]);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const [datasetResult, imagesResult, versionsResult] = await Promise.allSettled([
          fetchDatasetById(id),
          fetchDatasetImages(id),
          fetchDatasetVersions(id),
        ]);

        if (!mounted) return;

        if (datasetResult.status === "fulfilled") {
          setDataset(datasetResult.value);
        }

        if (imagesResult.status === "fulfilled" && imagesResult.value.length > 0) {
          setImages(imagesResult.value);
        } else {
          const fallbackCount =
            datasetResult.status === "fulfilled"
              ? Math.max(datasetResult.value.imageCount, 1)
              : FALLBACK_IMAGES;
          setImages(generateMockImages(fallbackCount));
        }

        if (versionsResult.status === "fulfilled" && versionsResult.value.length > 0) {
          setVersions(versionsResult.value);
        } else {
          const fallbackImageCount =
            imagesResult.status === "fulfilled"
              ? imagesResult.value.length
              : datasetResult.status === "fulfilled"
                ? datasetResult.value.imageCount
                : FALLBACK_IMAGES;
          setVersions(buildFallbackVersions(fallbackImageCount));
        }

        const failures = [datasetResult, imagesResult, versionsResult].filter(
          (result) => result.status === "rejected",
        );

        if (failures.length > 0) {
          const firstFailure = failures[0] as PromiseRejectedResult;
          const message =
            firstFailure.reason instanceof Error
              ? firstFailure.reason.message
              : "Some dataset resources could not be loaded from API.";
          setError(message);
        }
      } catch (err) {
        if (!mounted) return;

        const message = err instanceof Error ? err.message : "Failed to load dataset.";
        setError(message);
        setImages(generateMockImages(FALLBACK_IMAGES));
        setVersions(buildFallbackVersions(FALLBACK_IMAGES));
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      mounted = false;
    };
  }, [id]);

  const addImages = useCallback((count: number) => {
    if (count <= 0) return;

    const offset = images.length;
    const generated = generateMockImages(count).map((image, index) => ({
      ...image,
      id: `local-${offset + index + 1}`,
    }));

    setImages((prev) => [...generated, ...prev]);
    setDataset((prev) => (prev ? { ...prev, imageCount: prev.imageCount + count } : prev));
    setVersions((prev) =>
      prev.map((version, index) => (index === 0 ? { ...version, images: version.images + count } : version)),
    );
    setError(null);
  }, [images.length]);

  const deleteImage = useCallback((imageId: string) => {
    setImages((prev) => prev.filter((image) => image.id !== imageId));
    setDataset((prev) =>
      prev ? { ...prev, imageCount: Math.max(0, prev.imageCount - 1) } : prev,
    );
    setVersions((prev) =>
      prev.map((version, index) =>
        index === 0 ? { ...version, images: Math.max(0, version.images - 1) } : version,
      ),
    );
    setError(null);
  }, []);

  const generateVersion = useCallback(async (name: string, config: Record<string, unknown>) => {
    try {
      const created = await generateDatasetVersion(id, name, config);
      setVersions((prev) => [created, ...prev]);
      setError(null);
      return;
    } catch (err) {
      const fallback: DatasetVersion = {
        id: `local-v${Date.now()}`,
        name,
        images: images.length,
        annotations: Math.floor(Math.random() * 20) + 80,
        created: new Date().toISOString(),
        status: "Generating...",
        exportFormats: ["YOLOv8", "COCO", "Pascal VOC"],
      };

      setVersions((prev) => [fallback, ...prev]);

      setTimeout(() => {
        setVersions((prev) =>
          prev.map((version) =>
            version.id === fallback.id ? { ...version, status: "Ready" } : version,
          ),
        );
      }, 4000);

      const message =
        err instanceof Error
          ? err.message
          : "Version creation API unavailable, generated locally.";
      setError(message);
    }
  }, [id, images.length]);

  return {
    dataset,
    images,
    versions,
    loading,
    error,
    addImages,
    deleteImage,
    generateVersion
  };
}
