export interface FestivalMetric {
  id: string;
  metric: string;
  label: string;
  context: string;
  isVerified: boolean;
  accent: "sky" | "magenta" | "purple" | "navy";
}

/**
 * FESTIVAL FIGURES shown in the About hero (requested by the team).
 * `isVerified` stays false until the figures are officially confirmed.
 */
export const FESTIVAL_METRICS: FestivalMetric[] = [
  {
    id: "legacy",
    metric: "15+",
    label: "Years of Legacy",
    context: "Reference figure pending official confirmation",
    isVerified: false,
    accent: "sky",
  },
  {
    id: "footfall",
    metric: "15K+",
    label: "Footfall",
    context: "Reference figure pending official confirmation",
    isVerified: false,
    accent: "magenta",
  },
  {
    id: "colleges",
    metric: "200+",
    label: "Colleges",
    context: "Reference figure pending official confirmation",
    isVerified: false,
    accent: "purple",
  },
  {
    id: "events",
    metric: "40+",
    label: "Events",
    context: "Reference figure pending official confirmation",
    isVerified: false,
    accent: "navy",
  },
];

/**
 * Strict filter ensuring only verified statistics (`isVerified: true`)
 * can be rendered on the public website.
 */
export function getVerifiedMetrics(
  metrics: FestivalMetric[] = FESTIVAL_METRICS
): FestivalMetric[] {
  return metrics.filter((m) => m.isVerified === true);
}
