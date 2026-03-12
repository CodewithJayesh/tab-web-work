export interface NavigationItem {
  label: string;
  path: string;
  description: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
    description: "Landing page and feature highlights",
  },
  {
    label: "AboutUs",
    path: "/aboutus",
    description: "Our process and team principles",
  },
  {
    label: "Testimonial",
    path: "/testimonial",
    description: "Client stories and outcomes",
  },
  {
    label: "ContactUs",
    path: "/contactus",
    description: "Project inquiry and event form",
  },
];
