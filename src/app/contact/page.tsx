import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";

const title = "Contact | Energy Pulse";
const description =
    "Contact Energy Pulse about energy monitoring, battery optimization, and energy management for industrial and commercial facilities.";

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
    return <ContactPage />;
}
