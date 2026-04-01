/**
 * VisioX API Configuration & Centralized Data Fetching
 * 
 * To ensure easy integration with a backend repository:
 * 1. Define all API routes using the API_BASE_URL.
 * 2. Export functions for each data entity (Datasets, Annotations, etc.).
 * 3. Use standard fetch() with built-in Next.js 16 caching where applicable.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * Common header configuration for API calls.
 */
function getHeaders(): HeadersInit {
  return {
    "Content-Type": "application/json",
    // auth tokens or other headers should go here
  };
}

/**
 * Dataset Types & API Calls
 */
export interface Dataset {
  id: string;
  name: string;
  description: string;
  imageCount: number;
  classCount: number;
  updatedAt: string;
}

export async function fetchDatasets(): Promise<Dataset[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/datasets`, {
      headers: getHeaders(),
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error("Failed to fetch datasets");
    }

    return response.json();
  } catch (error) {
    console.error("Dataset API Error:", error);
    // Fallback to empty array or proper error handling in UI
    return [];
  }
}

/**
 * Annotation Types & API Calls
 */
export interface Annotation {
  id: string;
  label: string;
  color: string;
  points?: number[][]; // For polygons
  bbox?: number[]; // [x, y, w, h]
}

export async function fetchAnnotations(imageId: string): Promise<Annotation[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/images/${imageId}/annotations`, {
      headers: getHeaders()
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch annotations for image ${imageId}`);
    }

    return response.json();
  } catch (error) {
    console.error("Annotation API Error:", error);
    return [];
  }
}

/**
 * Add more module-specific fetchers below (Training, Deployment, etc.)
 */
