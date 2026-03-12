export interface InfoCardData {
  title: string;
  body: string;
}

export interface TestimonialData {
  quote: string;
  person: string;
  role: string;
}

export const homeFeatures: InfoCardData[] = [
  {
    title: "Reusable Component Library",
    body: "Shared cards, layout sections, and branded actions keep every page visually consistent.",
  },
  {
    title: "Event-Based Menu Configuration",
    body: "Menu clicks dispatch UI events to support analytics, lightweight telemetry, or side effects.",
  },
  {
    title: "Custom React Hooks",
    body: "Hooks handle API status checks, sticky header behavior, page titles, and form orchestration.",
  },
  {
    title: "Route-Driven Pages",
    body: "Each section has its own route for clean URL structure and scalable feature growth.",
  },
  {
    title: "Responsive Navigation",
    body: "Desktop tabs + mobile drawer provide an attractive, touch-friendly menu interaction.",
  },
  {
    title: "Hybrid CSS Strategy",
    body: "Global design tokens, animation keyframes, and CSS Modules are combined for flexible styling.",
  },
];

export const aboutValues: InfoCardData[] = [
  {
    title: "Planning First",
    body: "We define page intent and user actions before writing UI layers.",
  },
  {
    title: "Reusable by Default",
    body: "Each block is designed once and reused across routes with variant props.",
  },
  {
    title: "Interactive Feedback",
    body: "Menus, forms, and route transitions provide immediate visual response.",
  },
  {
    title: "Production Focus",
    body: "The architecture is route-safe, test-friendly, and easy to extend.",
  },
];

export const testimonials: TestimonialData[] = [
  {
    quote:
      "The new React structure helped us move from a static demo to a production-ready interface in days.",
    person: "Aditi Sharma",
    role: "Product Lead, Nova Systems",
  },
  {
    quote:
      "Reusable hooks and route-based pages made our frontend cleaner and far easier to maintain.",
    person: "Ravi Mehta",
    role: "Engineering Manager, Sunburst Labs",
  },
  {
    quote:
      "The attractive menu and polished visual system gave us a strong first impression with clients.",
    person: "Nikhil Rao",
    role: "Founder, BrightOrbit",
  },
];

export const contactSupport: InfoCardData[] = [
  {
    title: "Discovery",
    body: "Share your goals, user type, and timeline so we can shape the right UI scope.",
  },
  {
    title: "Design-to-Build",
    body: "We align layouts, interactions, and components before implementation starts.",
  },
  {
    title: "Delivery",
    body: "You receive reusable code with clear routes, hooks, and component patterns.",
  },
];
