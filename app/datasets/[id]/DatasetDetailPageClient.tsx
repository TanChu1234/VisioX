"use client";

import React from "react";
import { useParams } from "next/navigation";
import DatasetDetailClient from "./DatasetDetailClient";

export default function DatasetDetailPageClient() {
  const params = useParams<{ id: string }>();
  const id = params?.id || "";
  return <DatasetDetailClient id={id} />;
}
