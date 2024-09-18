import { Metadata } from "next";
import TaxCalculator from "./components/TaxCalculator";

export const metadata: Metadata = {
  title: "Tax Calculator",
  description:
    "Want to know how much tax you're paying? Use this tax calculator to check everything.",
};

export default function TaxCalculatorPage() {
  return <TaxCalculator />;
}
