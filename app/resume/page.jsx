"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profile, experience, education, skillGroups, about } from "@/lib/data";

const SectionHeader = ({ title, description }) => (
    <div className="flex flex-col gap-4 text-center xl:text-left mb-8">
        <h3 className="text-4xl font-bold">{title}</h3>
        {description && <p className="max-w-[640px] text-customColor2 mx-auto xl:mx-0">{description}</p>}
    </div>
);

const Tag = ({ children }) => (
    <li className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">{children}</li>
);

const ExperienceCard = ({ item, defaultOpen, current }) => {
    const [open, setOpen] = useState(defaultOpen);
    const expandable = item.bullets.length > 0;
    return (
        <li className="relative">
            {/* Timeline dot */}
            <span className="hidden xl:flex absolute -left-10 top-8 w-[23px] h-[23px] rounded-full border-2 border-accent bg-primary items-center justify-center">
                {current && <span className="w-[9px] h-[9px] rounded-full bg-accent animate-pulse" />}
            </span>
            <div className="card overflow-hidden">
            <button
                onClick={() => expandable && setOpen(!open)}
                aria-expanded={expandable ? open : undefined}
                disabled={!expandable}
                className="w-full text-left disabled:cursor-default p-6 xl:p-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 hover:bg-white/[0.02] transition-colors"
            >
                <div className="flex-1">
                    <span className="text-accent text-sm">{item.duration}</span>
                    <h4 className="text-xl font-semibold mt-1">{item.position}</h4>
                    <div className="flex items-center gap-3 mt-1">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                        <p className="text-customColor2">
                            {item.company}
                            {item.client && <span className="text-customColor2/60"> · Client: <span className="text-accent">{item.client}</span></span>}
                        </p>
                    </div>
                </div>
                {expandable && <FiChevronDown className={`text-2xl text-accent shrink-0 self-end sm:self-center transition-transform duration-300 ${open ? "rotate-180" : ""}`} />}
            </button>
            <AnimatePresence initial={false}>
                {expandable && open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 xl:px-8 pb-8">
                            <ul className="flex flex-col gap-3 mb-6">
                                {item.bullets.map((bullet, index) => (
                                    <li key={index} className="flex gap-3 text-sm leading-relaxed text-customColor2">
                                        <span className="text-accent mt-[2px]">▹</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex flex-wrap gap-2">
                                {item.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </li>
    );
};

const Resume = () => {
    return (
        <div className="min-h-[80vh] py-12 xl:py-4 pb-20">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 xl:sticky xl:top-28 self-start">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <SectionHeader
                                title="My experience"
                                description="5 years building backend systems, distributed services, and full-stack applications. Click a role for details."
                            />
                            <ul className="relative flex flex-col gap-6 xl:pl-10 xl:before:absolute xl:before:left-[11px] xl:before:top-8 xl:before:bottom-8 xl:before:w-px xl:before:bg-gradient-to-b xl:before:from-accent xl:before:via-accent/30 xl:before:to-accent/5">
                                {experience.map((item, index) => (
                                    <ExperienceCard key={item.company} item={item} defaultOpen={index === 0} current={index === 0} />
                                ))}
                            </ul>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <SectionHeader
                                title="My education"
                                description="Academic background and certifications."
                            />
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {education.map((item) => (
                                    <li key={item.degree} className="card lift min-h-[184px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span className="text-accent text-sm">{item.duration}</span>
                                        <h4 className="text-xl text-center lg:text-left">{item.degree}</h4>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                            <p className="text-customColor2">{item.institution}</p>
                                        </div>
                                        {item.note && <p className="text-sm text-accent/80 mt-1">{item.note}</p>}
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full">
                            <SectionHeader
                                title="My skills"
                                description="Languages, frameworks, data stores, and tooling I use day to day."
                            />
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {skillGroups.map((group) => (
                                    <li key={group.name} className="card lift p-6 xl:p-8">
                                        <h4 className="text-lg font-semibold mb-4 text-accent">{group.name}</h4>
                                        <ul className="flex flex-wrap gap-2">
                                            {group.items.map((skill) => (
                                                <li
                                                    key={skill}
                                                    className="text-sm px-3 py-1 rounded-md bg-primary/60 border border-customColor2/10 text-customColor2 hover:border-accent hover:text-accent transition-colors"
                                                >
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <SectionHeader title="About me" description={profile.summary} />
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-8 max-w-[720px] mx-auto xl:mx-0">
                                {about.map((item) => (
                                    <li key={item.fieldName} className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-customColor2">{item.fieldName}</span>
                                        <span className="text-lg">{item.fieldValue}</span>
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Resume;
