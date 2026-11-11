"use client";

import { CampusLocation } from "@/data/campusData";
import { X, MapPin, ExternalLink, Compass, Navigation } from "lucide-react";

interface LocationDrawerProps {
  location: CampusLocation | null;
  onClose: () => void;
}

export function LocationDrawer({ location, onClose }: LocationDrawerProps) {
  if (!location) return null;

  const { lat, lng } = location.coordinates;

  return (
    <aside
      aria-labelledby="location-drawer-heading"
      className="w-full lg:w-80 rounded-2xl bg-iris-navy/85 border border-iris-violet/40 p-6 flex flex-col justify-between gap-6 shadow-2xl"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-iris-purple/60 text-iris-sky border border-iris-violet/35">
            {location.category}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close location details"
            className="p-1 rounded-lg text-iris-white/70 hover:text-iris-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-sky"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div>
          <h3
            id="location-drawer-heading"
            className="text-xl font-bold text-iris-white flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-iris-magenta shrink-0" />
            <span>{location.name}</span>
          </h3>
          <p className="text-xs font-mono text-iris-sky/80 mt-1 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-iris-sky" />
            <span>{location.zone}</span>
          </p>
        </div>

        <p className="text-sm text-iris-white/80 leading-relaxed">
          {location.description}
        </p>

        <div className="p-3 rounded-xl bg-iris-black/60 border border-iris-violet/30 space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-iris-sky/70 flex items-center gap-1">
            <Navigation className="w-3 h-3 text-iris-magenta" /> Map Coordinates
          </span>
          <p className="text-xs font-mono text-iris-white/90">
            {lat.toFixed(6)}, {lng.toFixed(6)}
          </p>
        </div>
      </div>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-iris-sky text-iris-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-iris-white transition-colors"
      >
        <span>Directions in Google Maps</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </aside>
  );
}
