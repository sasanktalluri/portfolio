"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa'
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: profile.phone,
        href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: profile.email,
        href: `mailto:${profile.email}`
    },
    {
        icon: <FaLinkedinIn />,
        title: "LinkedIn",
        description: "Connect with me",
        href: profile.linkedin
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: profile.location
    }
]

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3f0439f3-7290-43d4-9b54-b55ed061dc0e");

        const form = event.target;
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setResult("Thanks! Your message was sent. I'll get back to you soon.");
                form.reset();
            } else {
                setResult(data.message || "Something went wrong. Please email me directly.");
            }
        } catch {
            setResult(`Couldn't send right now. Please email me at ${profile.email}.`);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: 'easeOut' }
            }}
            className="py-6 pb-20"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 card">
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-customColor2">Open to full-time backend, distributed systems, and full-stack roles. Send a note and I&apos;ll reply within a couple of days, or{" "}
                                <a href={`mailto:${profile.email}`} className="text-accent hover:underline">email me directly</a>.
                            </p>
                            {/* Input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="name" placeholder="Name" aria-label="Name" autoComplete="name" required />
                                <Input type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" required />
                            </div>
                            {/* Subject */}
                            <Input type="text" name="subject" placeholder="Subject" aria-label="Subject" required />
                            <Input type="hidden" name="from_name" value="Portfolio Form Submission" />
                            {/* Text area */}
                            <Textarea
                                className="h-[200px]"
                                name="message"
                                placeholder="Type your message here."
                                aria-label="Message"
                                required
                            />
                            {/* Btn */}
                            <Button type="submit" size="lg" className="max-w-52" disabled={result === "Sending...."}>
                                Send message
                            </Button>
                            {result && <p className="text-sm text-customColor2" role="status">{result}</p>}
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-surface text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-customColor2/60">{item.title}</p>
                                            {item.href ? (
                                                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-xl hover:text-accent transition-colors">
                                                    {item.description}
                                                </a>
                                            ) : (
                                                <h3 className="text-xl">{item.description}</h3>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;