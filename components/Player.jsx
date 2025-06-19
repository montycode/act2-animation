"use client";

import PlayerCard from "@/components/PlayerCard";
import React from "react";
import { useTracks } from "@/hooks/useTracks";

export default function Player() {
  const { tracks, loading, error } = useTracks();

  if (loading) return <p className="text-white p-4">Cargando canciones...</p>;
  if (error) return <p className="text-red-500 p-4">Error: {error}</p>;

  return <PlayerCard tracks={tracks} />;
}
