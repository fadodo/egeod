import { useEffect, useRef } from 'react';
import 'ol/ol.css';
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

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    console.log("Initializing OpenLayers map");
    
    if (!mapRef.current) return;

    // Toulouse coordinates
    const toulouse = fromLonLat([1.444209, 43.604652]);

    // Create marker feature
    const marker = new Feature({
      geometry: new Point(toulouse)
    });

    // Style for the marker
    const markerStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: '/placeholder.svg',
        scale: 0.5
      })
    });

    marker.setStyle(markerStyle);

    // Vector layer for marker
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker]
      })
    });

    // Create map instance
    const mapInstance = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: toulouse,
        zoom: 15
      })
    });

    mapInstanceRef.current = mapInstance;

    // Force map to update its size after mounting
    setTimeout(() => {
      mapInstance.updateSize();
    }, 100);

    return () => {
      console.log("Cleaning up map");
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setTarget(undefined);
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.updateSize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[300px] rounded-lg overflow-hidden"
      style={{ position: 'relative' }}
    />
  );
};

export default MapComponent;