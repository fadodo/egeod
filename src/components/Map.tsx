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
import { Style, Icon, Fill, Stroke, Circle as CircleStyle } from 'ol/style';
import Overlay from 'ol/Overlay';
import 'ol/ol.css';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Coordonnées de Toulouse (4 Rue Hubertine Auclert)
  const coordinates = [1.4603, 43.5880];

  useEffect(() => {
    if (!mapRef.current || !popupRef.current) return;

    console.log('Initializing OpenLayers map');

    // Create popup overlay
    const popup = new Overlay({
      element: popupRef.current,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -10],
    });

    // Créer le point pour le marqueur
    const marker = new Feature({
      geometry: new Point(fromLonLat(coordinates))
    });

    // Style for the marker
    const markerStyle = new Style({
      image: new CircleStyle({
        radius: 8,
        fill: new Fill({ color: 'hsl(var(--primary))' }),
        stroke: new Stroke({
          color: 'white',
          width: 2,
        }),
      }),
    });

    marker.setStyle(markerStyle);

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
      overlays: [popup],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: 15
      })
    });

    // Add hover interaction
    map.current.on('pointermove', function (e) {
      const pixel = map.current!.getEventPixel(e.originalEvent);
      const hit = map.current!.hasFeatureAtPixel(pixel);
      map.current!.getTargetElement().style.cursor = hit ? 'pointer' : '';
    });

    // Add click interaction
    map.current.on('click', function (e) {
      const feature = map.current!.forEachFeatureAtPixel(e.pixel, function (feature) {
        return feature;
      });

      if (feature) {
        const coordinates = (feature.getGeometry() as Point).getCoordinates();
        popup.setPosition(coordinates);
        popupRef.current!.style.display = 'block';
      } else {
        popupRef.current!.style.display = 'none';
      }
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
      <div ref={popupRef} className="absolute bg-white p-3 rounded-lg shadow-lg z-10 hidden">
        <h3 className="font-medium">EGEOD</h3>
        <p className="text-sm text-muted-foreground">4 Rue Hubertine Auclert<br />31400 Toulouse</p>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default MapComponent;