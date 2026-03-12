"use client";

import { useState, useCallback, useMemo } from 'react';
import { generateMockImages } from '@/lib/mock-data';

export function useDataset(id: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageCount, setImageCount] = useState(100);
  const [versions, setVersions] = useState([
    { id: 'v1', name: 'v1-baseline', images: 100, annotations: 84, created: '1h ago', status: 'Ready' }
  ]);

  // In a real app, this would be an API call
  const images = useMemo(() => generateMockImages(imageCount), [imageCount]);

  const addImages = useCallback((count: number) => {
    setImageCount(prev => prev + count);
  }, []);

  const deleteImage = useCallback((imageId: string) => {
    // Logic to remove image
    console.log(`Deleting image: ${imageId}`);
  }, []);

  const generateVersion = useCallback((name: string, config: any) => {
    const newVersion = {
      id: `v${versions.length + 1}`,
      name,
      images: imageCount,
      annotations: Math.floor(Math.random() * 20) + 80, // Mock 80-100%
      created: 'Just now',
      status: 'Generating...'
    };
    setVersions(prev => [newVersion, ...prev]);
    
    // Simulate generation completion
    setTimeout(() => {
      setVersions(prev => prev.map(v => 
        v.id === newVersion.id ? { ...v, status: 'Ready' } : v
      ));
    }, 4000);
  }, [imageCount, versions]);

  return {
    images,
    versions,
    loading,
    error,
    addImages,
    deleteImage,
    generateVersion
  };
}
