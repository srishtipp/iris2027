"use client";

import { CampusLocation } from "@/data/campusData";
import { MapPin, ChevronRight } from "lucide-react";

interface LocationListViewProps {
  locations: CampusLocation[];
  selectedLocation: CampusLocation | null;
  onSelectLocation: (loc: CampusLocation) => void;
}

export function LocationListView({
  locations,
  selectedLocation,
  onSelectLocation,
}: LocationListViewProps) {
  return (
    <div className="space-y-3" role="list" aria-label="Verified Campus Locations">
      {locations.map((loc) => {
        const isSelected = selectedLocation?.id === loc.id;
        return (
          <button
            key={loc.id}
            type="button"
            role="listitem"
            onClick={() => onSelectLocation(loc)}
            className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-sky ${
              isSelected
                ? "bg-iris-navy border-iris-magenta text-iris-white"
                : "bg-iris-navy/25 border-iris-violet/30 text-iris-white/80 hover:border-iris-violet/55"
            }`}
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-iris-sky shrink-0" />
              <div>
                <p className="text-sm font-semibold">{loc.name}</p>
                <p className="text-xs font-mono text-iris-sky/75 mt-0.5">
                  {loc.category}
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-iris-white/50 shrink-0" />
          </button>
        );
      })}
    </div>
  );
}
