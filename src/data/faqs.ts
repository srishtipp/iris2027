export type FAQCategory = "general" | "events" | "campus";

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  isVerified: boolean;
}

export const FAQ_CATEGORIES: { id: FAQCategory; label: string }[] = [
  { id: "general", label: "General" },
  { id: "events", label: "Events & Participation" },
  { id: "campus", label: "Campus & Logistics" },
];

export const VERIFIED_FAQS: FAQItem[] = [
  {
    id: "faq-what-is-iris",
    category: "general",
    question: "What is IRIS?",
    answer:
      "IRIS is the annual management and cultural festival of the Indian Institute of Management Indore (IIM Indore).",
    isVerified: true,
  },
  {
    id: "faq-festival-focus",
    category: "events",
    question: "What types of activities does IRIS feature?",
    answer:
      "The festival brings together management competitions and cultural showcases organized by the student community at IIM Indore.",
    isVerified: true,
  },
  {
    id: "faq-campus-wayfinding",
    category: "campus",
    question: "Where is the IIM Indore campus located?",
    answer:
      "IIM Indore is located atop Prabandh Shikhar on Rau-Pithampur Road, Indore, Madhya Pradesh.",
    isVerified: true,
  },
];

export const PROVISIONAL_FAQ_TOPICS: {
  id: string;
  category: FAQCategory;
  topic: string;
  status: string;
}[] = [
  {
    id: "prov-guidelines-communication",
    category: "campus",
    topic: "How are event guidelines and participation policies communicated?",
    status: "Provisional topic",
  },
  {
    id: "prov-eligibility",
    category: "general",
    topic: "Participant eligibility, registration fees & team formation rules",
    status: "Provisional topic",
  },
  {
    id: "prov-schedule",
    category: "events",
    topic: "Event formats, competition timelines & rulebooks",
    status: "Provisional topic",
  },
  {
    id: "prov-hospitality",
    category: "campus",
    topic: "Accommodation, travel arrangements & campus entry guidelines",
    status: "Provisional topic",
  },
];

export function getVerifiedFaqs(items: FAQItem[] = VERIFIED_FAQS): FAQItem[] {
  return items.filter((item) => item.isVerified === true);
}
