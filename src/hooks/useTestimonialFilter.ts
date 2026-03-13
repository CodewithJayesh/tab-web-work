import { useState } from "react";
import type { TestimonialData } from "../config/content";

type SegmentFilter = "all" | TestimonialData["segment"];

export function useTestimonialFilter(testimonials: TestimonialData[]) {
  const [segment, setSegment] = useState<SegmentFilter>("all");

  const filteredTestimonials =
    segment === "all"
      ? testimonials
      : testimonials.filter((entry) => entry.segment === segment);

  return {
    segment,
    setSegment,
    filteredTestimonials,
  };
}
