"use client";

import { useEffect, useState } from "react";

export function useTracks(url = "/data/topTracks.json") {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error al cargar tracks: ${res.status}`);
        const data = await res.json();
        setTracks(data);
      } catch (err) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [url]);

  return { tracks, loading, error };
}
