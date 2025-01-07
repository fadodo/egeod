import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    console.log('Initializing map');
    
    // Initialize map only if it hasn't been initialized yet
    if (!mapRef.current) {
      mapRef.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://demotiles.maplibre.org/style.json', // Free and open source tiles
        center: [2.3522, 48.8566], // Paris coordinates
        zoom: 12,
        pitch: 45,
      });

      // Add navigation controls
      mapRef.current.addControl(
        new maplibregl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Disable scroll zoom
      mapRef.current.scrollZoom.disable();
    }

    // Cleanup function
    return () => {
      console.log('Cleaning up map');
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[80vh]">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;