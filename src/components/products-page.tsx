"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { Gauge, Network, Zap } from "lucide-react";

const products = [
    {
        id: "count-ct",
        number: "01",
        name: "KDK COUNT CT",
        category: "CT energy meter",
        model: "CAGE CLAMP · push-in",
        icon: Gauge,
        description:
            "A compact three-phase meter for measuring industrial loads through external current transformers. Push-in terminals simplify wiring, while communication interfaces connect readings to energy software.",
        specifications: [
            { label: "Nominal voltage", value: "3 × 230/400 V" },
            { label: "CT input current", value: "1.5 A reference / 5 A maximum" },
            { label: "Interfaces", value: "Modbus RTU, M-Bus, Bluetooth" },
            { label: "Housing width", value: "36 mm (2 modules)" },
            { label: "Protection", value: "IP51" },
        ],
    },
    {
        id: "count3-pro",
        number: "02",
        name: "KDK COUNT3 PRO",
        category: "Three-phase energy meter",
        model: "Bidirectional measurement",
        icon: Zap,
        description:
            "Measure imported and exported active and reactive energy at commercial consumption points. A Modbus interface makes the readings available to an energy management system.",
        specifications: [
            { label: "Nominal voltage", value: "3 × 230/400 V" },
            { label: "Maximum current", value: "100 A" },
            { label: "Communication", value: "Modbus" },
            { label: "Housing width", value: "72 mm (4 modules)" },
            { label: "Protection", value: "IP51" },
        ],
    },
    {
        id: "modbus-converter",
        number: "03",
        name: "KDK CONVERTER",
        category: "Communication gateway",
        model: "Modbus RTU to Modbus TCP",
        icon: Network,
        description:
            "Connect serial Modbus meters to an Ethernet network so their readings can be collected centrally. Designed for compatible Professional-series energy meters.",
        specifications: [
            { label: "Conversion", value: "Modbus RTU → Modbus TCP/IP" },
            { label: "Meter capacity", value: "Up to 50 compatible meters" },
            { label: "Power supply", value: "5 V DC" },
            { label: "Housing width", value: "18 mm (1 module)" },
            { label: "Network", value: "Ethernet" },
        ],
    },
];

export default function ProductsPage() {
    return (
        <MotionConfig reducedMotion="user" transition={{ duration: 0.4 }}>
            <div className="min-h-screen bg-neutral-950 text-green-50 selection:bg-green-800 selection:text-white">
                <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 bg-green-300 p-3 text-green-950 focus:not-sr-only">
                    Skip to content
                </a>

                <header className="border-b border-green-900">
                    <div className="mx-auto max-w-6xl px-6 flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
                        <Link
                            href="/"
                            aria-label="Energy Pulse home"
                            className="flex w-fit items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4"
                        >
              <span className="text-xl font-bold tracking-tight text-green-300 sm:text-2xl">
                Energy Pulse
              </span>
                            <span className="max-w-32 border-l border-green-900 pl-3 text-xs font-medium leading-4 text-gray-300">
                Energy Management System
              </span>
                        </Link>

                        <nav aria-label="Main navigation" className="flex gap-6 text-sm font-medium">
                            <Link href="/" className="border-b border-transparent py-2 transition-colors hover:border-green-300 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4">
                                Home
                            </Link>
                            <Link
                                href="/products"
                                aria-current="page"
                                className="border-b border-green-300 py-2 text-green-300 transition-colors hover:text-green-200 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                Products
                            </Link>
                            <Link href="/about" className="border-b border-transparent py-2 transition-colors hover:border-green-300 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4">
                                About
                            </Link>
                            <Link href="/#contact" className="border-b border-transparent py-2 transition-colors hover:border-green-300 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </header>

                <motion.main
                    id="main-content"
                    tabIndex={-1}
                    initial={{ opacity: 0.85, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:pt-20"
                >
                    <section aria-labelledby="products-heading" className="pb-12 sm:pb-16">
                        <p className="font-mono text-xs uppercase tracking-widest flex items-center gap-3 text-gray-400">
                            <span aria-hidden="true" className="h-1 w-8 bg-green-300" />
                            Our products
                        </p>

                        <h1
                            id="products-heading"
                            className="mt-8 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
                        >
                            Built to measure.
                            <span className="block font-serif font-normal italic text-green-300">
                Ready to connect.
              </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                            Explore energy meters and communication gateways for industrial
                            and commercial facilities. Compare their key specifications to
                            find the right starting point for your monitoring setup.
                        </p>
                    </section>

                    <section aria-label="Energy management products" className="space-y-6">
                        {products.map((product) => {
                            const Icon = product.icon;

                            return (
                                <motion.article
                                    key={product.id}
                                    aria-labelledby={`${product.id}-heading`}
                                    initial={{ opacity: 0.85, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    whileHover={{ y: -3 }}
                                    className="grid gap-8 border border-green-900 bg-green-950 p-5 transition-colors hover:border-green-300 sm:p-8 lg:grid-cols-2 lg:gap-12"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="border border-green-800 bg-neutral-950 p-3 text-green-300">
                                                <Icon aria-hidden="true" className="size-7 stroke-[1.5]" />
                                            </div>
                                            <span className="font-mono text-xs text-gray-400">
                        {product.number}
                      </span>
                                        </div>

                                        <p className="font-mono text-xs uppercase tracking-widest mt-6 text-green-300">
                                            {product.category}
                                        </p>
                                        <h2
                                            id={`${product.id}-heading`}
                                            className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                                        >
                                            {product.name}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-400">{product.model}</p>
                                        <p className="mt-5 max-w-xl leading-7 text-gray-300">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="border-t border-green-900 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                                        <h3 className="mb-3 text-sm font-semibold text-green-50">
                                            Key specifications
                                        </h3>
                                        <dl>
                                            {product.specifications.map((specification) => (
                                                <div
                                                    key={specification.label}
                                                    className="grid grid-cols-2 gap-4 border-b border-green-900 py-3 text-sm last:border-b-0"
                                                >
                                                    <dt className="text-gray-400">{specification.label}</dt>
                                                    <dd className="min-w-0 break-words font-medium text-green-50">
                                                        {specification.value}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </section>
                </motion.main>

                <footer className="border-t border-green-900">
                    <div className="mx-auto max-w-6xl px-6 flex flex-col gap-2 py-7 text-xs text-gray-300 sm:flex-row sm:justify-between">
                        <p className="font-semibold text-green-50">Energy Pulse</p>
                        <p>Connected hardware. Intelligent energy management.</p>
                    </div>
                </footer>
            </div>
        </MotionConfig>
    );
}
