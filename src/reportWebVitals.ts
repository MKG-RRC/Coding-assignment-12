import type { Metric } from "web-vitals";
import { onCLS, onFID, onLCP, onINP } from "web-vitals";
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
    onINP(onPerfEntry);
  }
};

export default reportWebVitals;
