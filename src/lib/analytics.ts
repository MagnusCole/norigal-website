// lib/analytics.ts
import ReactGA from "react-ga4";

export const initAnalytics = () => {
  ReactGA.initialize("G-6KER5B9279");
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
