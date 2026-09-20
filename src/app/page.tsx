import type { Metadata } from "next";
import HomePage from "@/components/home-page";

const title = "Energy Pulse";
const description =
    "IoT energy monitoring, battery optimization, and predictive maintenance for industrial and commercial facilities.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Energy Pulse",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}