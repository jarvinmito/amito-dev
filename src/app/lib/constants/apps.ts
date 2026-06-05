import { ROUTES } from "./routes";

export interface IApp {
  title: string;
  link: string;
  description: string;
  external?: boolean;
}

type AppRouteKeys = "SPENDING_TRACKER" | "TAXCALC" | "TENURE";

function buildApps(
  pick: Record<AppRouteKeys, string>
): IApp[] {
  return [
    {
      title: "Singilin",
      link: "https://singilin.ph",
      description:
        "Client and invoice management for freelancers and agencies — send proposals and track payments without drowning in spreadsheets.",
      external: true,
    },
    {
      title: "Track My Spending",
      link: pick.SPENDING_TRACKER,
      description:
        "Want to know where your money goes? My latest creation, track your spending using this small tool.",
    },
    {
      title: "Mitotwee",
      link: "https://mitotwee.com",
      description:
        "Do you have a small store? Manage your inventory and sales with this simple app. You'll know if you're really making a profit and what items you should keep in stock.",
      external: true,
    },
    {
      title: "Tax Calculator 2024 Philippines",
      link: pick.TAXCALC,
      description:
        "When you need some quick checking on how much tax you need to pay as contribution to the Government hehe.",
    },
    {
      title: "Tenure Calculator",
      link: pick.TENURE,
      description:
        "Super sweet small app that calculates how long have you been in to something.",
    },
  ];
}

export const APPS = buildApps({
  SPENDING_TRACKER: ROUTES.LANDING.SPENDING_TRACKER,
  TAXCALC: ROUTES.LANDING.TAXCALC,
  TENURE: ROUTES.LANDING.TENURE,
});

export const APPS_V1 = buildApps({
  SPENDING_TRACKER: ROUTES.V1.SPENDING_TRACKER,
  TAXCALC: ROUTES.V1.TAXCALC,
  TENURE: ROUTES.V1.TENURE,
});
