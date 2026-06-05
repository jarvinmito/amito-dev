export const ROUTES = {
  APP: {},
  /** Public site (minimal redesign) */
  LANDING: {
    HOME: "/",
    BLOG: "/blog",
    EXP: "/exp",
    HIRE: "/hire-me",
    SERVICES: "/services",
    WORKS: "/works",
    PROJECTS: "/projects",
    TAXCALC: "/apps/tax-calculator",
    TENURE: "/apps/tenure",
    SPENDING_TRACKER: "/apps/track-my-spending",
    BUCKET_LIST: "/apps/bucket-list",
    KAIZEN: "/apps/kaizen",
  },
  /** Archived cyberpunk build — still reachable but disallowed from indexing */
  V1: {
    HOME: "/v1",
    BLOG: "/v1/blog",
    EXP: "/v1/exp",
    HIRE: "/hire-me",
    SERVICES: "/v1/services",
    WORKS: "/v1/works",
    PROJECTS: "/v1/projects",
    TAXCALC: "/v1/apps/tax-calculator",
    TENURE: "/v1/apps/tenure",
    SPENDING_TRACKER: "/v1/apps/track-my-spending",
    BUCKET_LIST: "/v1/apps/bucket-list",
    KAIZEN: "/apps/kaizen",
  },
} as const;
