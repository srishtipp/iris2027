"use client";

import dynamic from "next/dynamic";
import { CampusLocation } from "@/data/campusData";

const LeafletCampusMap = dynamic(() => import("./LeafletCampusMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] sm:h-[540px] rounded-2xl bg-iris-navy/25 border border-iris-violet/40 flex items-center justify-center text-xs font-mono text-iris-sky animate-pulse">
      Loading Interactive IIM Indore Campus Map...
    </div>
  ),
});

interface MapCanvasProps {
  locations: CampusLocation[];
  selectedLocation: CampusLocation | null;
  onSelectLocation: (loc: CampusLocation) => void;
  tileLayerMode: "dark" | "satellite";
}

export function MapCanvas({
  locations,
  selectedLocation,
  onSelectLocation,
  tileLayerMode,
}: MapCanvasProps) {
  return (
    <LeafletCampusMap
      locations={locations}
      selectedLocation={selectedLocation}
      onSelectLocation={onSelectLocation}
      tileLayerMode={tileLayerMode}
    />
  );
}
