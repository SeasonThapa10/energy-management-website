import type { Metadata } from "next";
import HomePage from "@/components/home-page";

const title = "Energy Management";
const description =
    "Understand your energy consumption with IoT monitoring, actionable insights, and alerts for industrial and commercial facilities.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Energy Management",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}