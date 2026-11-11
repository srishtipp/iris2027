export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-what-is-iris",
    question: "What is IRIS 2027?",
    answer:
      "IRIS 2027 is the annual cultural and management festival of IIM Indore. It brings together students, industry leaders, and creative minds in one vibrant platform. The festival blends intellectual competitions with performances, networking, and celebrations that define the spirit of campus life.",
  },
  {
    id: "faq-who-can-participate",
    question: "Who can participate in IRIS?",
    answer:
      "Students from colleges and universities across India are encouraged to participate, along with alumni, faculty, and festival enthusiasts. Whether you are interested in business events, cultural showcases, or simply experiencing the energy of a premier B-school fest, IRIS has something for everyone.",
  },
  {
    id: "faq-when-where",
    question: "When and where is the festival held?",
    answer:
      "IRIS is hosted at IIM Indore and is traditionally held in January each year. The event spans multiple days and includes competitions, workshops, guest interactions, and cultural performances, creating a rich and immersive festival experience.",
  },
  {
    id: "faq-management-and-cultural",
    question: "Are there events for both management and cultural interests?",
    answer:
      "Yes, IRIS is designed to celebrate both intellectual depth and artistic expression. Management enthusiasts can take part in case studies, strategy games, and entrepreneurial challenges, while cultural lovers can enjoy dance, music, fashion, and creative showcases throughout the festival.",
  },
  {
    id: "faq-stay-updated",
    question: "How can I stay updated on registrations and announcements?",
    answer:
      "The best way to stay informed is to follow the official IRIS website and social media handles. Regular updates include registration details, event schedules, speaker announcements, rulebooks, and important deadlines so participants never miss out on key information.",
  },
];
