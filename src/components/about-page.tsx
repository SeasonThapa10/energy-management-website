"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

const team = [
    {
        name: "Jelle de Vries",
        role: "Energy Engineer",
        description:
            "Turns energy readings into practical steps to reduce waste and manage demand.",
    },
    {
        name: "Season Thapa",
        role: "Software Developer",
        description:
            "Connects meters and gateways so facility teams can access reliable energy data.",
    },
    {
        name: "Alex Johnson",
        role: "Customer Support",
        description:
            "Helps teams understand the platform and find the information they need.",
    },
];

export default function AboutPage() {
    return (
        <MotionConfig reducedMotion="user" transition={{ duration: 0.4 }}>
            <div className="min-h-screen bg-neutral-950 text-green-50 selection:bg-green-800 selection:text-white">
                <a
                    href="#main-content"
                    className="sr-only fixed left-4 top-4 z-50 bg-green-300 p-3 text-green-950 focus:not-sr-only"
                >
                    Skip to content
                </a>

                <header className="border-b border-green-900">
                    <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">
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

                        <nav
                            aria-label="Main navigation"
                            className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium"
                        >
                            <Link
                                href="/"
                                className="border-b border-transparent py-2 transition-colors hover:border-green-300 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className="border-b border-transparent py-2 transition-colors hover:border-green-300 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                Products
                            </Link>
                            <Link
                                href="/about"
                                aria-current="page"
                                className="border-b border-green-300 py-2 text-green-300 transition-colors hover:text-green-200 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                About
                            </Link>
                            <Link href="/contact" className="border-b border-transparent py-2 transition-colors hover:border-green-300 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4">
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
                >
                    <section
                        aria-labelledby="about-heading"
                        className="mx-auto max-w-6xl px-6 pb-14 pt-14 sm:pb-20 sm:pt-20"
                    >
                        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-gray-400">
                            <span aria-hidden="true" className="h-1 w-8 bg-green-300" />
                            About Energy Pulse
                        </p>

                        <h1
                            id="about-heading"
                            className="mt-8 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
                        >
                            Energy expertise.
                            <span className="block font-serif font-normal italic text-green-300">
                Put to work.
              </span>
                        </h1>

                        <div className="mt-10 grid gap-5 border-t border-green-900 pt-8 md:grid-cols-3 md:gap-10">
                            <h2 className="font-mono text-sm uppercase tracking-widest text-green-300">
                                What we do
                            </h2>
                            <div className="space-y-4 text-lg leading-8 text-gray-300 md:col-span-2">
                                {/* Short excerpt from https://www.apollo-gs.com/about-us */}
                                <p>
                                    We help medium and large companies implement energy-saving
                                    techniques through our software and hardware.
                                </p>
                            </div>
                        </div>
                    </section>

                    <motion.section
                        aria-labelledby="mission-heading"
                        initial={{ opacity: 0.85, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="border-y border-green-900 bg-green-950"
                    >
                        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3 md:py-16">
                            <p className="font-mono text-xs uppercase tracking-widest text-green-300">
                                Our mission
                            </p>
                            <div className="md:col-span-2">
                                <h2
                                    id="mission-heading"
                                    className="text-3xl font-medium leading-tight sm:text-4xl"
                                >
                                    Make every kilowatt-hour count.
                                </h2>
                                <p className="mt-5 max-w-2xl leading-8 text-gray-300">
                                    Our mission is straightforward: to make sustainable and efficient
                                    energy management accessible and actionable for every enterprise.
                                    Whether you are looking to reduce your carbon footprint, hit
                                    aggressive ESG (Environmental, Social, and Governance) targets,
                                    or simply slash your operational overhead, we provide the tools
                                    to get you there. We bring light to your blind spots and the
                                    foresight to secure your energy future
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    <section
                        aria-labelledby="team-heading"
                        className="mx-auto max-w-6xl px-6 py-16 sm:py-20"
                    >
                        <p className="font-mono text-xs uppercase tracking-widest text-green-300">
                            Our team
                        </p>
                        <h2
                            id="team-heading"
                            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
                        >
                            Different skills. One shared purpose.
                        </h2>
                        <p className="mt-5 max-w-2xl leading-7 text-gray-300">
                            Energy monitoring takes engineering, software, and support working
                            together. Each role helps make energy information easier to use.
                        </p>
                        <p className="mt-3 text-xs text-gray-400">
                            Energy Pulse is a demo company. The team profiles below are fictional.
                        </p>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {/* map() creates one card for each team member. */}
                            {team.map((member) => (
                                <motion.article
                                    key={member.name}
                                    initial={{ opacity: 0.85, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileHover={{ y: -4 }}
                                    className="border border-green-900 bg-green-950 p-6 transition-colors hover:border-green-300"
                                >
                                    <h3 className="mt-6 text-xl font-semibold">{member.name}</h3>
                                    <p className="mt-2 text-sm text-green-300">{member.role}</p>
                                    <p className="mt-4 leading-7 text-gray-300">
                                        {member.description}
                                    </p>
                                </motion.article>
                            ))}
                        </div>
                    </section>
                </motion.main>

                <footer className="border-t border-green-900">
                    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-7 text-xs text-gray-300 sm:flex-row sm:justify-between">
                        <p className="font-semibold text-green-50">Energy Pulse</p>
                        <p>Connected hardware. Intelligent energy management.</p>
                    </div>
                </footer>
            </div>
        </MotionConfig>
    );
}
