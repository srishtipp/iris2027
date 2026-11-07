"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import { CampusLocation } from "@/data/campusData";
import { Maximize2 } from "lucide-react";

interface LeafletCampusMapProps {
  locations: CampusLocation[];
  selectedLocation: CampusLocation | null;
  onSelectLocation: (loc: CampusLocation) => void;
  tileLayerMode: "dark" | "satellite";
}

const CAMPUS_CENTER: [number, number] = [22.6268, 75.7902];
const DEFAULT_ZOOM = 16;

export default function LeafletCampusMap({
  locations,
  selectedLocation,
  onSelectLocation,
  tileLayerMode,
}: LeafletCampusMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: CAMPUS_CENTER,
      zoom: DEFAULT_ZOOM,
      minZoom: 14,
      maxZoom: 19,
      zoomControl: false,
    });

    L.control.zoom({ position: "topright" }).addTo(map);

    const markersGroup = L.layerGroup().addTo(map);
    markersLayerRef.current = markersGroup;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    if (tileLayerMode === "satellite") {
      // Esri World Imagery Satellite tiles (Free, no API key required)
      const satLayer = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics",
          maxZoom: 19,
        }
      ).addTo(map);
      tileLayerRef.current = satLayer;
    } else {
      // Standard OpenStreetMap tiles with custom CSS dark filter (Free, no API key required, zero Carto watermark)
      const osmLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
          className: "iris-map-tiles",
        }
      ).addTo(map);
      tileLayerRef.current = osmLayer;
    }
  }, [tileLayerMode]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersLayerRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    locations.forEach((loc) => {
      const isSelected = selectedLocation?.id === loc.id;

      const pinHtml = `
        <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
          <span style="
            position: absolute;
            width: ${isSelected ? "32px" : "22px"};
            height: ${isSelected ? "32px" : "22px"};
            border-radius: 9999px;
            background: ${
              isSelected
                ? "rgba(183, 21, 132, 0.45)"
                : "rgba(138, 79, 181, 0.35)"
            };
            border: 1px solid ${isSelected ? "#B71584" : "rgba(138, 79, 181, 0.7)"};
            transition: all 0.25s ease;
          "></span>
          <span style="
            position: relative;
            width: ${isSelected ? "14px" : "11px"};
            height: ${isSelected ? "14px" : "11px"};
            border-radius: 9999px;
            background: ${isSelected ? "#B71584" : "#84B5FF"};
            border: 2.5px solid #FCFCFC;
            box-shadow: 0 0 12px ${isSelected ? "#B71584" : "#84B5FF"};
          "></span>
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: "iris-custom-div-icon",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([loc.coordinates.lat, loc.coordinates.lng], {
        icon: customIcon,
        title: loc.name,
      });

      marker.bindTooltip(loc.name, {
        permanent: true,
        direction: "top",
        offset: [0, -14],
        className: isSelected
          ? "iris-pin-tooltip iris-pin-tooltip-active"
          : "iris-pin-tooltip",
      });

      marker.on("click", () => {
        onSelectLocation(loc);
      });

      marker.addTo(markersGroup);
    });
  }, [locations, selectedLocation, onSelectLocation]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !selectedLocation) return;

    map.flyTo(
      [selectedLocation.coordinates.lat, selectedLocation.coordinates.lng],
      17,
      {
        animate: true,
        duration: 0.8,
      }
    );
  }, [selectedLocation]);

  const handleResetBounds = () => {
    const map = mapInstanceRef.current;
    if (!map || locations.length === 0) return;
    const bounds = L.latLngBounds(
      locations.map((l) => [l.coordinates.lat, l.coordinates.lng])
    );
    map.flyToBounds(bounds.pad(0.18), { duration: 0.8 });
  };

  return (
    <div className="relative w-full h-[460px] sm:h-[540px] rounded-2xl overflow-hidden border border-iris-violet/40 shadow-2xl bg-iris-navy-deep">
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      <div className="absolute top-3 left-3 z-[400] flex items-center gap-2">
        <button
          type="button"
          onClick={handleResetBounds}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-iris-navy/90 hover:bg-iris-magenta text-iris-white border border-iris-violet/45 text-xs font-mono shadow-lg backdrop-blur-md transition-colors cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5 text-iris-sky" />
          <span>Fit All 14 Landmarks</span>
        </button>
      </div>
    </div>
  );
}
