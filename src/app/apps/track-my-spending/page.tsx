import TrackMySpending from "./components/TrackMySpending";

export const metadata = {
  title: "Track My Spending",
  openGraph: {
    title: "Track My Spending",
    description:
      "Want to know where your money goes? Track it using this small tool.",
  },
};

export default async function TrackMySpendingPage() {
  return <TrackMySpending />;
}