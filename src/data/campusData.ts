export type CampusCategory =
  | "all"
  | "academic"
  | "sports"
  | "accommodation"
  | "facilities"
  | "entry";

export interface CampusLocation {
  id: string;
  name: string;
  category: Exclude<CampusCategory, "all">;
  zone: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  isVerified: boolean;
}

export interface CategoryMeta {
  id: CampusCategory;
  label: string;
}

export const CAMPUS_CATEGORIES: CategoryMeta[] = [
  { id: "all", label: "All Landmarks (14)" },
  { id: "academic", label: "Academic & Blocks" },
  { id: "sports", label: "Sports & Complexes" },
  { id: "accommodation", label: "HRC & Hostels" },
  { id: "facilities", label: "Campus Facilities" },
  { id: "entry", label: "Main Gate" },
];

/**
 * VERIFIED IIM INDORE GPS COORDINATES:
 * Updated landmark list with Prachin Shiva Temple removed and 5 new requested landmarks added.
 */
export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    id: "loc-main-gate",
    name: "Main Gate",
    category: "entry",
    zone: "Campus Entrance",
    description:
      "Primary entry checkpoint and security gate at the entrance of the IIM Indore campus.",
    coordinates: {
      lat: 22.63099765884763,
      lng: 75.79176484791799,
    },
    isVerified: true,
  },
  {
    id: "loc-acad-block",
    name: "Academic Block",
    category: "academic",
    zone: "Academic Zone",
    description:
      "Main academic complex housing lecture theatres, classrooms, syndicate rooms, and faculty wings.",
    coordinates: {
      lat: 22.62708415614366,
      lng: 75.79125212312023,
    },
    isVerified: true,
  },
  {
    id: "loc-d-e-block",
    name: "D/E Block",
    category: "academic",
    zone: "Academic Ridge",
    description:
      "Designated academic wing housing lecture halls and faculty faculty syndicate rooms.",
    coordinates: {
      lat: 22.627623110665585,
      lng: 75.79152487978797,
    },
    isVerified: true,
  },
  {
    id: "loc-src",
    name: "SRC",
    category: "academic",
    zone: "Central Academic Hub",
    description:
      "Student Residence Council (SRC) and administrative coordination facility.",
    coordinates: {
      lat: 22.62875639116877,
      lng: 75.7909783050511,
    },
    isVerified: true,
  },
  {
    id: "loc-learning-centre",
    name: "Learning Centre",
    category: "academic",
    zone: "Central Academic Hub",
    description:
      "IIM Indore's central library, digital resource hub, and research learning centre.",
    coordinates: {
      lat: 22.625843157803935,
      lng: 75.79071312060756,
    },
    isVerified: true,
  },
  {
    id: "loc-old-auditorium",
    name: "Old Auditorium",
    category: "academic",
    zone: "Auditorium Complex",
    description:
      "Indoor amphitheatre and auditorium venue for flagship speaker sessions, cultural events, and ceremonies.",
    coordinates: {
      lat: 22.625992714380086,
      lng: 75.78990551844802,
    },
    isVerified: true,
  },
  {
    id: "loc-sports-complex",
    name: "Sports Complex",
    category: "sports",
    zone: "Sports & Recreation Zone",
    description:
      "Indoor and outdoor athletic complex featuring gymnasium, courts, swimming facilities, and event spaces.",
    coordinates: {
      lat: 22.62838901500279,
      lng: 75.78821804997062,
    },
    isVerified: true,
  },
  {
    id: "loc-badminton-complex",
    name: "Badminton Complex",
    category: "sports",
    zone: "Sports & Recreation Zone",
    description:
      "Dedicated indoor badminton courts and sports training facility.",
    coordinates: {
      lat: 22.627073421499837,
      lng: 75.7954649206792,
    },
    isVerified: true,
  },
  {
    id: "loc-cricket-stadium",
    name: "Cricket Stadium",
    category: "sports",
    zone: "Stadium Grounds",
    description:
      "Full-scale campus cricket ground and pavilion hosting outdoor tournaments and athletic events.",
    coordinates: {
      lat: 22.62636899087884,
      lng: 75.78679596434762,
    },
    isVerified: true,
  },
  {
    id: "loc-football-turf",
    name: "Football Turf",
    category: "sports",
    zone: "Athletic Grounds",
    description:
      "Dedicated campus football turf for inter-college matches and sporting events.",
    coordinates: {
      lat: 22.6252870493213,
      lng: 75.78882283154624,
    },
    isVerified: true,
  },
  {
    id: "loc-hrc",
    name: "HRC (Hostel Reception Centre)",
    category: "accommodation",
    zone: "Residential Zone",
    description:
      "Central reception hub for student residential blocks, participant accommodation, and hostel coordination.",
    coordinates: {
      lat: 22.624766029206967,
      lng: 75.79103186798982,
    },
    isVerified: true,
  },
  {
    id: "loc-sr-6",
    name: "SR 6",
    category: "accommodation",
    zone: "Student Residential Area",
    description:
      "Student Residence block 6 on campus.",
    coordinates: {
      lat: 22.62504090935545,
      lng: 75.79167295977977,
    },
    isVerified: true,
  },
  {
    id: "loc-sr-12",
    name: "SR 12",
    category: "accommodation",
    zone: "Student Residential Area",
    description:
      "Student Residence block 12 on campus.",
    coordinates: {
      lat: 22.624152097141835,
      lng: 75.79282094523177,
    },
    isVerified: true,
  },
  {
    id: "loc-medical-centre",
    name: "Medical Centre",
    category: "facilities",
    zone: "Health & Wellness",
    description:
      "On-campus medical clinic providing healthcare, first-aid support, and emergency assistance.",
    coordinates: {
      lat: 22.62599972483397,
      lng: 75.79310301539273,
    },
    isVerified: true,
  },
];

export function getVerifiedCampusLocations(
  locations: CampusLocation[] = CAMPUS_LOCATIONS
): CampusLocation[] {
  return locations.filter((loc) => loc.isVerified === true);
}
