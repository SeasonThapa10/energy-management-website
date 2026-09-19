"use client";

import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";

const contactEmail = "test@example.com";
const contactLink = `mailto:${contactEmail}?subject=Energy%20monitoring%20enquiry`;

const features = [
    {
        number: "01",
        title: "Connected energy monitoring",
        description:
            "Bring data from meters, machinery, solar panels, and batteries into one energy management system for a clear view of consumption.",
    },
    {
        number: "02",
        title: "Battery optimization",
        description:
            "Use solar energy and battery storage more effectively by managing when to charge, discharge, and respond to peaks in demand.",
    },
    {
        number: "03",
        title: "Predictive maintenance",
        description:
            "Identify unusual energy patterns in equipment so your team can investigate faults early and plan maintenance before problems grow.",
    },
];

export default function HomePage() {
    return (
        <MotionConfig reducedMotion="user" transition={{ duration: 0.4 }}>
            <div className="min-h-screen bg-neutral-950 text-green-50 selection:bg-green-800 selection:text-white">
                <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 bg-green-300 p-3 text-green-950 focus:not-sr-only">
                    Skip to content
                </a>

                {/* Navigation: Products opens another page; Contact jumps to the section below. */}
                <header id="home" className="border-b border-green-900">
                    <div className="mx-auto max-w-6xl px-6 flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
                        <a
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
                        </a>

                        <nav aria-label="Main navigation" className="flex gap-6 text-sm font-medium">
                            <Link href="/products" className="border-b border-transparent py-2 transition-colors hover:border-green-300 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4">
                                Products
                            </Link>

                            <a href="#contact" className="border-b border-transparent py-2 transition-colors hover:border-green-300 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4">
                                Contact
                            </a>
                        </nav>
                    </div>
                </header>

                <main id="main-content" tabIndex={-1}>
                    {/* 1. Hero section */}
                    <motion.section
                        aria-labelledby="hero-heading"
                        initial={{ opacity: 0.8, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mx-auto max-w-6xl px-6 pb-12 pt-14 sm:pt-20 lg:pt-24"
                    >
                        <p className="font-mono text-xs uppercase tracking-widest flex items-center gap-3 text-gray-400">
                            <span aria-hidden="true" className="h-1 w-8 bg-green-300" />
                            IoT energy management
                        </p>

                        <div className="mt-8 grid items-end gap-10 lg:grid-cols-3">
                            <h1
                                id="hero-heading"
                                className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl lg:col-span-2 lg:text-8xl"
                            >
                                Your energy,
                                <span className="block font-serif font-normal italic text-green-300">
                  under control.
                </span>
                            </h1>

                            <div className="max-w-md lg:pb-3">
                                <p className="text-lg leading-8 text-gray-300">
                                    Energy Pulse brings IoT hardware, AI-powered
                                    software, and energy expertise together to help industrial
                                    and commercial facilities use energy more efficiently.
                                </p>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-6 px-6 py-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300 bg-green-300 text-green-950 hover:bg-green-200 mt-7"
                                >
                                    Talk to our team <span aria-hidden="true">↗</span>
                                </motion.a>
                            </div>
                        </div>

                        <div className="mt-14 flex flex-col gap-3 border-t border-green-900 pt-5 text-xs text-gray-300 sm:flex-row sm:justify-between">
                            <p>Industrial facilities / Commercial buildings</p>
                            <p>Monitor. Optimize. Maintain.</p>
                        </div>
                    </motion.section>

                    {/* 2. Company value proposition. Reference: https://www.apollo-gs.com/hardware-development */}
                    <motion.section
                        id="approach"
                        aria-labelledby="approach-heading"
                        initial={{ opacity: 0.8, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="scroll-mt-6 border-y border-green-950 bg-green-950 text-green-50"
                    >
                        <div className="mx-auto max-w-6xl px-6 grid gap-8 py-14 md:grid-cols-3 md:py-16">
                            <p className="font-mono text-xs uppercase tracking-widest text-green-300">
                                Hardware, software, and expertise
                            </p>
                            <div className="md:col-span-2">
                                <h2 id="approach-heading" className="text-3xl font-medium leading-tight sm:text-4xl">
                                    Connect the systems you already have.
                                </h2>
                                <p className="mt-5 max-w-2xl leading-8 text-gray-300">
                                    Connect existing meters, machines, and sensors through edge
                                    devices and gateways. Our energy management software turns
                                    that data into clear insights, helping your team find waste
                                    and manage energy across facilities. From installation to
                                    ongoing advice, we support improvements that fit the way
                                    your business works.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* 3. Key product features */}
                    <section
                        id="features"
                        aria-labelledby="features-heading"
                        className="mx-auto max-w-6xl px-6 scroll-mt-6 py-16 sm:py-20"
                    >
                        <p className="font-mono text-xs uppercase tracking-widest text-green-300">
                            Energy intelligence in practice
                        </p>
                        <h2 id="features-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            More insight. Better performance.
                        </h2>

                        <div className="mt-10 border-b border-green-900">
                            {/* map() creates one feature row for each object in the array. */}
                            {features.map((feature) => (
                                <motion.article
                                    key={feature.number}
                                    initial={{ opacity: 0.8, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileHover={{ x: 4 }}
                                    className="grid gap-4 border-t border-green-900 py-8 transition-colors hover:bg-green-950 md:grid-cols-12 md:gap-6"
                                >
                  <span className="font-mono text-sm text-green-300 md:col-span-1">
                    {feature.number}
                  </span>
                                    <h3 className="text-2xl font-medium tracking-tight md:col-span-4">
                                        {feature.title}
                                    </h3>
                                    <p className="max-w-xl leading-7 text-gray-300 md:col-span-7">
                                        {feature.description}
                                    </p>
                                </motion.article>
                            ))}
                        </div>
                    </section>

                    {/* 4. Call to action */}
                    <section
                        id="contact"
                        aria-labelledby="contact-heading"
                        className="scroll-mt-6 border-y border-green-950 bg-green-950 text-green-50"
                    >
                        <div className="mx-auto max-w-6xl px-6 flex flex-col items-start gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
                            <div className="max-w-2xl">
                                <p className="font-mono text-xs uppercase tracking-widest text-green-300">
                                    Let&apos;s talk about your facility
                                </p>
                                <h2 id="contact-heading" className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                                    Put your energy data to work.
                                </h2>
                                <p className="mt-4 max-w-lg leading-7 text-gray-200">
                                    Tell us about your buildings, equipment, and energy goals.
                                    We can explore the right mix of monitoring, storage
                                    optimization, and technical support.
                                </p>
                            </div>
                            <motion.a
                                href={contactLink}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-6 px-6 py-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300 border border-green-300 text-green-300 hover:bg-green-300 hover:text-green-950 shrink-0"
                            >
                                Discuss your project <span aria-hidden="true">↗</span>
                            </motion.a>
                        </div>
                    </section>
                </main>

                <footer className="mx-auto max-w-6xl px-6 flex flex-col gap-2 py-7 text-xs text-gray-300 sm:flex-row sm:justify-between">
                    <p className="font-semibold text-green-50">Energy Pulse</p>
                    <p>Connected hardware. Intelligent energy management.</p>
                </footer>
            </div>
        </MotionConfig>
    );
}
