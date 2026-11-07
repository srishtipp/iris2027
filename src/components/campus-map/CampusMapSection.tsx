"use client";

import { useState, useMemo } from "react";
import {
  CAMPUS_CATEGORIES,
  CampusCategory,
  CampusLocation,
  getVerifiedCampusLocations,
} from "@/data/campusData";
import { MapCanvas } from "./MapCanvas";
import { LocationDrawer } from "./LocationDrawer";
import { LocationListView } from "./LocationListView";
import { Search, Map, Globe, List, MapPin } from "lucide-react";

export function CampusMapSection() {
  const verifiedLocations = useMemo(() => getVerifiedCampusLocations(), []);

  const [activeCategory, setActiveCategory] = useState<CampusCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<CampusLocation | null>(
    () => (verifiedLocations.length > 0 ? verifiedLocations[0] : null)
  );
  const [viewMode, setViewMode] = useState<"dark" | "satellite" | "list">("dark");

  const filteredLocations = useMemo(() => {
    return verifiedLocations.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.zone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [verifiedLocations, activeCategory, searchQuery]);

  return (
    <section
      id="campus-map"
      aria-labelledby="campus-map-heading"
      className="py-24 px-6 relative max-w-6xl mx-auto border-t border-iris-violet/30 scroll-mt-16"
    >
      <div className="max-w-2xl mb-10 space-y-3">
        <span className="font-mono text-xs uppercase tracking-widest text-iris-sky font-semibold">
          Campus Wayfinding · Prabandh Shikhar
        </span>
        <h2
          id="campus-map-heading"
          className="text-3xl sm:text-5xl font-bold tracking-tight text-iris-white"
        >
          Interactive Campus Map
        </h2>
        <p className="text-sm sm:text-base text-iris-white/75 leading-relaxed">
          Explore all {verifiedLocations.length} verified IIM Indore campus landmarks plotted at their exact GPS coordinates. Click any pin or landmark tag below to pan the map and inspect venue details.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {CAMPUS_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-sky ${
              activeCategory === cat.id
                ? "bg-iris-sky text-iris-black font-semibold border-iris-sky"
                : "bg-iris-navy/35 text-iris-white/70 border-iris-violet/35 hover:border-iris-violet/55"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {/* Search & Map Mode Switcher (Dark Theme Map / Satellite / List) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 text-iris-sky/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              aria-label="Search campus landmarks"
              placeholder="Search Stadium, HRC, Temple, Gate..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-iris-navy/30 border border-iris-violet/35 text-iris-white placeholder:text-iris-white/40 focus:outline-none focus:border-iris-sky"
            />
          </div>

          <div className="flex items-center bg-iris-navy/50 p-1 rounded-xl border border-iris-violet/35 self-start">
            <button
              type="button"
              onClick={() => setViewMode("dark")}
              aria-pressed={viewMode === "dark"}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-sky ${
                viewMode === "dark"
                  ? "bg-iris-sky text-iris-black font-semibold"
                  : "text-iris-white/70 hover:text-iris-white"
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Dark Map</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("satellite")}
              aria-pressed={viewMode === "satellite"}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-sky ${
                viewMode === "satellite"
                  ? "bg-iris-sky text-iris-black font-semibold"
                  : "text-iris-white/70 hover:text-iris-white"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Satellite</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              aria-pressed={viewMode === "list"}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-sky ${
                viewMode === "list"
                  ? "bg-iris-sky text-iris-black font-semibold"
                  : "text-iris-white/70 hover:text-iris-white"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List View</span>
            </button>
          </div>
        </div>

        {/* Quick-Jump Landmark Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-iris-sky/75 shrink-0 flex items-center gap-1 pr-1">
            <MapPin className="w-3.5 h-3.5 text-iris-magenta" /> Jump to:
          </span>
          {filteredLocations.map((loc) => {
            const isSelected = selectedLocation?.id === loc.id;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedLocation(loc)}
                className={`px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-iris-magenta text-iris-white border-iris-magenta font-semibold shadow-md"
                    : "bg-iris-navy/30 text-iris-white/75 border-iris-violet/30 hover:border-iris-violet/55 hover:text-iris-white"
                }`}
              >
                {loc.name}
              </button>
            );
          })}
        </div>

        {/* Main Viewport + Detail Drawer */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {viewMode === "list" ? (
              <LocationListView
                locations={filteredLocations}
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
              />
            ) : (
              <MapCanvas
                locations={filteredLocations}
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
                tileLayerMode={viewMode}
              />
            )}
          </div>
          <LocationDrawer
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        </div>
      </div>
    </section>
  );
}
