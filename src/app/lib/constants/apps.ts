import { ROUTES } from ".";

export interface IApp {
  title: string;
  link: string;
  description: string;
}

export const APPS: IApp[] = [
  {
    title: "Mitotwee",
    link: "https://mitotwee.com",
    description:
      "Do you have a small store? Manage your inventory and sales with this simple app. You'll know if you're really making a profit and what items you should keep in stock.",
  },
  {
    title: "Tax Calculator 2024 Philippines",
    link: ROUTES.LANDING.TAXCALC,
    description:
      "When you need some quick checking on how much tax you need to pay as contribution to the Government hehe.",
  },
  {
    title: "Tenure Calculator",
    link: ROUTES.LANDING.TENURE,
    description:
      "Super sweet small app that calculates how long have you been in to something.",
  },
];
