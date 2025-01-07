import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    console.log('Initializing OpenLayers map');

    map.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
        maxZoom: 18
      })
    });

    return () => {
      console.log('Cleaning up map');
      if (map.current) {
        map.current.setTarget(undefined);
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[80vh]">
      <div ref={mapRef} className="absolute inset-0 rounded-lg overflow-hidden" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default MapComponent;