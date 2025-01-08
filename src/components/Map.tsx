import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon } from 'ol/style';
import 'ol/ol.css';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  // Coordonnées de Toulouse (4 Rue Hubertine Auclert)
  const coordinates = [1.4603, 43.5880];

  useEffect(() => {
    if (!mapRef.current) return;

    console.log('Initializing OpenLayers map');

    // Créer le point pour le marqueur
    const marker = new Feature({
      geometry: new Point(fromLonLat(coordinates))
    });

    // Style du marqueur
    marker.setStyle(new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: '/public/logoEGEOD1.png',
        scale: 0.5
      })
    }));

    // Source et couche pour le marqueur
    const vectorSource = new VectorSource({
      features: [marker]
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    // Créer la carte
    map.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: 15
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
    <div className="relative w-full h-[400px]">
      <div ref={mapRef} className="absolute inset-0 rounded-lg overflow-hidden" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default MapComponent;