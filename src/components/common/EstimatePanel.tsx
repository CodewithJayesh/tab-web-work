import { useProjectEstimate } from "../../hooks/useProjectEstimate";

export default function EstimatePanel() {
  const {
    estimatedBudget,
    pages,
    projectType,
    setPages,
    setProjectType,
    setTimelineWeeks,
    timelineWeeks,
  } = useProjectEstimate();

  return (
    <article className="estimate-panel">
      <p className="eyebrow">Project Planner</p>
      <h3 className="estimate-title">Estimate scope before we talk.</h3>

      <label className="field-label" htmlFor="projectType">
        Project type
      </label>
      <select
        className="input-control"
        id="projectType"
        onChange={(event) =>
          setProjectType(event.target.value as "landing" | "business" | "product")
        }
        value={projectType}
      >
        <option value="landing">Landing page</option>
        <option value="business">Business website</option>
        <option value="product">Product frontend</option>
      </select>

      <label className="field-label" htmlFor="pages">
        Number of pages: {pages}
      </label>
      <input
        className="range-control"
        id="pages"
        max={15}
        min={1}
        onChange={(event) => setPages(Number(event.target.value))}
        type="range"
        value={pages}
      />

      <label className="field-label" htmlFor="timeline">
        Timeline in weeks: {timelineWeeks}
      </label>
      <input
        className="range-control"
        id="timeline"
        max={12}
        min={2}
        onChange={(event) => setTimelineWeeks(Number(event.target.value))}
        type="range"
        value={timelineWeeks}
      />

      <div className="estimate-result">
        <p className="metric-label">Estimated budget</p>
        <p className="estimate-value">INR {estimatedBudget.toLocaleString("en-IN")}</p>
      </div>
    </article>
  );
}
