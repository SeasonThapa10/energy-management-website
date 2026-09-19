import type { Metadata } from "next";
import ProductsPage from "@/components/products-page";

const title = "products | Energy Pulse";
const description =
    "Explore energy meters and communication gateways for industrial and commercial energy monitoring.";

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
    return <ProductsPage />;
}