import React from 'react';
import AnnotateClient from './AnnotateClient';

export async function generateStaticParams() {
  const datasetIds = ['1', '2', '3', '4'];
  const imageIds = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  
  const params = [];
  for (const id of datasetIds) {
    for (const imageId of imageIds) {
      params.push({ id, imageId });
    }
  }
  return params;
}

export default async function AnnotatePage({ params }: { params: Promise<{ id: string, imageId: string }> }) {
  const { id, imageId } = await params;
  return <AnnotateClient id={id} imageId={imageId} />;
}
