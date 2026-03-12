import { useEffect, useState } from "react";

type HealthStatus = "loading" | "online" | "offline";

interface ApiHealthState {
  status: HealthStatus;
  message: string;
  checkedAt?: string;
}

export function useApiHealth(): ApiHealthState {
  const [state, setState] = useState<ApiHealthState>({
    status: "loading",
    message: "Checking /api/health",
  });

  useEffect(() => {
    const controller = new AbortController();
    const apiBase = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "";
    const endpoint = `${apiBase}/api/health`;

    async function fetchHealth() {
      try {
        const response = await fetch(endpoint, {
          method: "GET",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const payload = (await response.json()) as {
          message?: string;
          status?: string;
        };

        setState({
          status: "online",
          message:
            payload.message ??
            payload.status ??
            "API responded successfully from /api/health",
          checkedAt: new Date().toISOString(),
        });
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        const reason =
          error instanceof Error ? error.message : "Unable to reach API endpoint";
        setState({
          status: "offline",
          message: reason,
          checkedAt: new Date().toISOString(),
        });
      }
    }

    void fetchHealth();
    return () => controller.abort();
  }, []);

  return state;
}
