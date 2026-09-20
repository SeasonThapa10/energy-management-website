import type { Metadata } from "next";
import AboutPage from "@/components/about-page";

const title = "About | Energy Pulse";
const description =
    "Meet Energy Pulse, a demo energy management company connecting IoT hardware, energy software, and practical support for industrial and commercial facilities.";

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
    return <AboutPage />;
}
