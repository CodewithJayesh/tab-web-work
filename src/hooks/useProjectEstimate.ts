import { useState } from "react";

type ProjectType = "landing" | "business" | "product";

const projectBaseCost: Record<ProjectType, number> = {
  landing: 18000,
  business: 36000,
  product: 70000,
};

interface EstimateState {
  projectType: ProjectType;
  pages: number;
  timelineWeeks: number;
  estimatedBudget: number;
  setProjectType: (value: ProjectType) => void;
  setPages: (value: number) => void;
  setTimelineWeeks: (value: number) => void;
}

export function useProjectEstimate(): EstimateState {
  const [projectType, setProjectType] = useState<ProjectType>("business");
  const [pages, setPages] = useState(6);
  const [timelineWeeks, setTimelineWeeks] = useState(4);

  const speedMultiplier = timelineWeeks <= 3 ? 1.25 : timelineWeeks <= 5 ? 1.1 : 1;
  const estimatedBudget = Math.round(
    (projectBaseCost[projectType] + pages * 2400) * speedMultiplier,
  );

  return {
    projectType,
    pages,
    timelineWeeks,
    estimatedBudget,
    setProjectType,
    setPages,
    setTimelineWeeks,
  };
}
