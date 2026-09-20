"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion, MotionConfig } from "framer-motion";

// Check the three fields before showing the demo confirmation.
function validateForm(name: string, email: string, message: string) {
    const errors = { name: "", email: "", message: "" };

    if (!name.trim()) {
        errors.name = "Please enter your name.";
    }

    if (!email.trim()) {
        errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        errors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
        errors.message = "Please enter a message.";
    }

    return errors;
}

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Keep the browser on this page.
        setSubmitted(false);

        const newErrors = validateForm(name, email, message);
        setErrors(newErrors);

        // Move keyboard focus to the first field that needs fixing.
        const form = event.currentTarget;

        if (newErrors.name) {
            form.querySelector<HTMLInputElement>("#contact-name")?.focus();
            return;
        }

        if (newErrors.email) {
            form.querySelector<HTMLInputElement>("#contact-email")?.focus();
            return;
        }

        if (newErrors.message) {
            form.querySelector<HTMLTextAreaElement>("#contact-message")?.focus();
            return;
        }

        // This assignment demo validates the form without sending or saving it.
        setSubmitted(true);
    }

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
                                className="border-b border-transparent py-2 transition-colors hover:border-green-300 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                aria-current="page"
                                className="border-b border-green-300 py-2 text-green-300 transition-colors hover:text-green-200 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
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
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        <section aria-labelledby="contact-heading">
                            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-gray-400">
                                <span aria-hidden="true" className="h-1 w-8 bg-green-300" />
                                Contact us
                            </p>
                            <h1
                                id="contact-heading"
                                className="mt-8 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
                            >
                                Get in touch
                                <span className="block font-serif font-normal italic text-green-300">
                  with Energy Pulse.
                </span>
                            </h1>
                            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-300">
                                Tell us about your facility and your energy management needs.
                            </p>
                            <p className="mt-6 max-w-lg border-t border-green-900 pt-6 text-sm leading-6 text-gray-400">
                                Demo contact form for this assignment. No email will be sent.
                            </p>
                        </section>

                        <motion.section
                            aria-labelledby="form-heading"
                            initial={{ opacity: 0.85, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            className="border border-green-900 bg-green-950 p-6 sm:p-8"
                        >
                            <h2 id="form-heading" className="text-2xl font-semibold">
                                Your message
                            </h2>
                            <p className="mt-2 text-sm text-gray-300">All fields are required.</p>

                            {/* noValidate lets our React code show errors beside each field. */}
                            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                                <div>
                                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(event) => {
                                            setName(event.target.value);
                                            setErrors({ ...errors, name: "" });
                                            setSubmitted(false);
                                        }}
                                        aria-invalid={Boolean(errors.name)}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        className="w-full border border-green-800 bg-neutral-950 px-4 py-3 text-green-50 transition-colors focus:border-green-300 focus:outline-2 focus:outline-green-300"
                                    />
                                    {errors.name && (
                                        <p id="name-error" role="alert" className="mt-2 text-sm text-red-300">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                            setErrors({ ...errors, email: "" });
                                            setSubmitted(false);
                                        }}
                                        aria-invalid={Boolean(errors.email)}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        className="w-full border border-green-800 bg-neutral-950 px-4 py-3 text-green-50 transition-colors focus:border-green-300 focus:outline-2 focus:outline-green-300"
                                    />
                                    {errors.email && (
                                        <p id="email-error" role="alert" className="mt-2 text-sm text-red-300">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={6}
                                        required
                                        value={message}
                                        onChange={(event) => {
                                            setMessage(event.target.value);
                                            setErrors({ ...errors, message: "" });
                                            setSubmitted(false);
                                        }}
                                        aria-invalid={Boolean(errors.message)}
                                        aria-describedby={errors.message ? "message-error" : undefined}
                                        className="w-full resize-y border border-green-800 bg-neutral-950 px-4 py-3 text-green-50 transition-colors focus:border-green-300 focus:outline-2 focus:outline-green-300"
                                    />
                                    {errors.message && (
                                        <p id="message-error" role="alert" className="mt-2 text-sm text-red-300">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex w-full cursor-pointer items-center justify-center gap-6 bg-green-300 px-6 py-4 text-sm font-semibold text-green-950 transition-colors hover:bg-green-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300 sm:w-auto"
                                >
                                    Submit message <span aria-hidden="true">↗</span>
                                </motion.button>

                                <p role="status" aria-atomic="true" className="min-h-6 text-sm leading-6 text-green-300">
                                    {submitted
                                        ? "Form validated successfully. This demo has not sent an email."
                                        : ""}
                                </p>
                            </form>
                        </motion.section>
                    </div>
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
