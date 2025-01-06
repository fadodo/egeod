import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json', // Free OpenStreetMap style
      center: [2.3522, 48.8566], // Paris coordinates
      zoom: 4,
      pitch: 45,
    });

    map.current.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.scrollZoom.disable();

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[80vh]">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/90 rounded-lg" />
    </div>
  );
};

export default Map;