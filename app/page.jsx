"use client";

import Link from "next/link";
import { FiArrowRight, FiServer, FiShuffle, FiCloud, FiLayers, FiShield, FiActivity, FiRepeat } from "react-icons/fi";
import { MdOutlineSpeed } from "react-icons/md";

// Component imports
import Social from "@/components/Social";
import Reveal from "@/components/Reveal";
import CodeCard from "@/components/CodeCard";
import AIPipeline from "@/components/AIPipeline";
import { Button } from "@/components/ui/button";
import { profile, principles, highlights, experience } from "@/lib/data";

const icons = {
    server: <FiServer />,
    flow: <FiShuffle />,
    cloud: <FiCloud />,
    layers: <FiLayers />,
    shield: <FiShield />,
    gauge: <MdOutlineSpeed />,
    repeat: <FiRepeat />,
    activity: <FiActivity />,
};

const Home = () => {
    const current = experience[0];

    return (
        <section className="pb-20">
            <div className="container mx-auto">
                {/* Hero */}
                <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-14 items-center xl:pt-6 pb-16">
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
                        <Reveal delay={0.05}>
                            <span className="inline-flex flex-wrap justify-center items-center gap-x-2 text-xs sm:text-sm border border-accent/40 bg-accent/5 rounded-full px-4 py-1 mb-6 text-customColor2">
                                <span className="relative flex w-2 h-2">
                                    <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
                                    <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
                                </span>
                                {current.position}
                                {current.client && <span className="text-customColor2/60">· Client: <span className="text-accent">{current.client}</span></span>}
                            </span>
                        </Reveal>
                        <h1 className="text-[44px] sm:text-[56px] xl:text-[68px] leading-[1.05] font-semibold mb-6">
                                Hi, I&apos;m <br />
                                <span className="text-accent">{profile.firstName}</span>
                        </h1>
                        <p className="text-xl xl:text-2xl mb-9 max-w-[620px]">{profile.tagline}</p>
                        <Reveal delay={0.15} className="flex flex-col sm:flex-row items-center gap-8">
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Button asChild size="lg" className="group">
                                    <Link href="/resume" className="flex items-center gap-2">
                                        View experience
                                        <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/contact">Get in touch</Link>
                                </Button>
                            </div>
                            <Social
                                containerStyles="flex gap-5"
                                iconStyles="w-10 h-10 border border-accent/60 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:-translate-y-1 transition-all duration-300"
                            />
                        </Reveal>
                    </div>

                    <Reveal delay={0.2} className="hidden md:block w-full max-w-[560px] mx-auto">
                        <CodeCard />
                    </Reveal>
                </div>

                {/* How I work */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-y border-customColor2/10 divide-y sm:divide-y-0 divide-customColor2/10">
                    {principles.map((item, index) => (
                        <Reveal
                            as="li"
                            key={item.title}
                            delay={index * 0.08}
                            className={`group flex items-start gap-4 py-8 sm:px-6 ${index % 4 === 0 ? "sm:pl-0" : ""} ${index > 0 ? "xl:border-l border-customColor2/10" : ""} ${index % 2 ? "sm:border-l xl:border-l" : ""}`}
                        >
                            <span className="text-2xl text-accent mt-1 transition-transform duration-300 group-hover:-translate-y-1">
                                {icons[item.icon]}
                            </span>
                            <div>
                                <h3 className="font-semibold leading-snug group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-sm text-customColor2/70 leading-relaxed mt-1">{item.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </ul>

                {/* What I build */}
                <div className="pt-24">
                    <Reveal className="flex flex-col items-center xl:items-start text-center xl:text-left mb-10">
                        <h2 className="h2">What I build</h2>
                    </Reveal>
                    <Reveal className="mb-6">
                        <AIPipeline />
                    </Reveal>
                    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {highlights.map((item, index) => (
                            <Reveal as="li" key={item.title} delay={index * 0.08} className="card lift p-8 flex flex-col gap-4 group">
                                <span className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                        {icons[item.icon]}
                                </span>
                                <h3 className="text-xl font-semibold leading-snug group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-customColor2 text-sm leading-relaxed">{item.text}</p>
                            </Reveal>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <Reveal className="mt-24">
                    <div className="card relative overflow-hidden px-8 py-12 xl:px-16 flex flex-col xl:flex-row items-center justify-between gap-8 text-center xl:text-left">
                        <div aria-hidden className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
                        <div className="relative">
                            <h2 className="h2 mb-3">Have a role in mind?</h2>
                            <p className="text-customColor2 max-w-[520px]">
                                I&apos;m open to backend, distributed systems, and full-stack opportunities. Let&apos;s talk.
                            </p>
                        </div>
                        <Button asChild size="lg" className="relative group shrink-0">
                            <Link href="/contact" className="flex items-center gap-2">
                                Get in touch
                                <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Home;
