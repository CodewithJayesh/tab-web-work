export interface InfoCardData {
  title: string;
  body: string;
}

export interface TestimonialData {
  quote: string;
  person: string;
  role: string;
  segment: "startup" | "agency" | "enterprise";
}

export interface MetricData {
  label: string;
  value: string;
}

export interface FaqData {
  question: string;
  answer: string;
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

export const homeMetrics: MetricData[] = [
  {
    label: "Reusable sections shipped",
    value: "12+",
  },
  {
    label: "Responsive breakpoints tuned",
    value: "4",
  },
  {
    label: "Custom hooks powering UI",
    value: "7",
  },
];

export const servicePackages: InfoCardData[] = [
  {
    title: "Landing Page Sprint",
    body: "Focused marketing page build with animated hero, sections, CTA flow, and mobile-first polish.",
  },
  {
    title: "Business Website System",
    body: "Multi-page website with reusable layout, route structure, form flows, and content sections.",
  },
  {
    title: "Product UI Foundation",
    body: "Frontend starter with route shells, dashboard patterns, API wiring, and maintainable component architecture.",
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
    segment: "startup",
  },
  {
    quote:
      "Reusable hooks and route-based pages made our frontend cleaner and far easier to maintain.",
    person: "Ravi Mehta",
    role: "Engineering Manager, Sunburst Labs",
    segment: "enterprise",
  },
  {
    quote:
      "The attractive menu and polished visual system gave us a strong first impression with clients.",
    person: "Nikhil Rao",
    role: "Founder, BrightOrbit",
    segment: "agency",
  },
  {
    quote:
      "Our contact flow and menu interactions finally felt intentional instead of stitched together.",
    person: "Sneha Verma",
    role: "Operations Lead, PixelDock",
    segment: "agency",
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

export const faqs: FaqData[] = [
  {
    question: "Can this frontend connect to an existing backend?",
    answer:
      "Yes. The project already isolates API health logic in a hook, so we can point forms and data blocks to your existing endpoints.",
  },
  {
    question: "Is this structure ready for more pages later?",
    answer:
      "Yes. The layout, routes, hooks, and config-driven content were designed so new pages can be added without reworking the whole app.",
  },
  {
    question: "Can we change the look and feel for a brand?",
    answer:
      "Yes. Colors, typography, motion, and card treatments are centralized so we can quickly re-theme the site while keeping the same architecture.",
  },
];
