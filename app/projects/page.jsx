"use client";

import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Reveal from "@/components/Reveal";
import { projects, profile } from "@/lib/data";

const filters = ["All", ...new Set(projects.map((p) => p.category))];

// forwardRef: AnimatePresence "popLayout" needs to measure exiting cards
const ProjectCard = forwardRef(function ProjectCard({ project, number }, ref) {
    const [expanded, setExpanded] = useState(false);
    return (
        <motion.li
            ref={ref}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`card lift p-8 flex flex-col gap-5 group ${project.featured ? "border-accent/20" : ""}`}
        >
            <div className="flex items-start justify-between gap-4">
                <span className="text-6xl leading-none font-extrabold text-transparent text-outline opacity-60 group-hover:opacity-100 transition-opacity">
                    {String(number).padStart(2, "0")}
                </span>
                <div className="flex gap-3">
                    {project.live && (
                        <Link href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live project"
                            className="w-11 h-11 rounded-full bg-white/5 flex justify-center items-center hover:bg-accent hover:text-primary transition-colors">
                            <BsArrowUpRight className="text-xl" />
                        </Link>
                    )}
                    {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository"
                            className="w-11 h-11 rounded-full bg-white/5 flex justify-center items-center text-customColor2 hover:bg-accent hover:text-primary transition-colors">
                            <BsGithub className="text-xl" />
                        </Link>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[2px] text-customColor2/60">
                    {project.category}
                </span>
                <h2 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                </h2>
            </div>

            <p className={`text-customColor2 text-sm leading-relaxed ${expanded ? "" : "line-clamp-4"}`}>
                {project.description}
            </p>
            {project.description.length > 260 && (
                <button onClick={() => setExpanded(!expanded)} className="self-start text-sm text-accent hover:underline -mt-3">
                    {expanded ? "Show less" : "Read more"}
                </button>
            )}

            <ul className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-customColor2/10">
                {project.stack.map((tech) => (
                    <li key={tech} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">{tech}</li>
                ))}
            </ul>
        </motion.li>
    );
});

// Lower-weight projects: one compact row each
const CompactCard = forwardRef(function CompactCard({ project, number }, ref) {
    return (
        <motion.li
            ref={ref}
            layout
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="card p-6 flex gap-5 items-start group"
        >
            <span className="text-2xl font-extrabold text-transparent text-outline opacity-60 leading-none pt-1">
                {String(number).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
                <span className="text-xs uppercase tracking-[2px] text-customColor2/60">{project.category}</span>
                <h3 className="text-lg font-semibold leading-snug mt-1 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-customColor2/80 leading-relaxed mt-2 line-clamp-2">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-3">
                    {project.stack.map((tech) => (
                        <li key={tech} className="text-[11px] px-2 py-[2px] rounded-full bg-accent/10 text-accent border border-accent/20">{tech}</li>
                    ))}
                </ul>
            </div>
            {project.github && <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}
                className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex justify-center items-center text-customColor2 hover:bg-accent hover:text-primary transition-colors">
                <BsGithub className="text-lg" />
            </Link>}
        </motion.li>
    );
});

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const visible = projects.filter((p) => filter === "All" || p.category === filter);
    const featured = visible.filter((p) => p.featured);
    const earlier = visible.filter((p) => !p.featured);

    return (
        <section className="min-h-[80vh] py-12 xl:py-4 pb-20">
            <div className="container mx-auto">
                <Reveal className="flex flex-col gap-4 items-center xl:items-start text-center xl:text-left mb-10">
                    <span className="eyebrow">Selected work</span>
                    <h1 className="h2">Projects</h1>
                    <p className="max-w-[640px] text-customColor2">
                        Side projects and coursework, from GenAI backends to operating-system internals. More on{" "}
                        <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</Link>.
                    </p>
                </Reveal>

                {/* Filters */}
                <Reveal delay={0.1} className="flex flex-wrap justify-center xl:justify-start gap-2 mb-10">
                    {filters.map((name) => {
                        const active = filter === name;
                        return (
                            <button
                                key={name}
                                onClick={() => setFilter(name)}
                                aria-pressed={active}
                                className={`relative px-4 py-2 rounded-full text-sm border transition-colors ${
                                    active ? "text-primary border-accent" : "border-customColor2/15 text-customColor2 hover:border-accent hover:text-accent"
                                }`}
                            >
                                {active && (
                                    <motion.span
                                        layoutId="project-filter"
                                        className="absolute inset-0 rounded-full bg-accent"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative">{name}</span>
                            </button>
                        );
                    })}
                </Reveal>

                {/* Featured: highest-weight work, full cards */}
                {featured.length > 0 && (
                    <motion.ul layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {featured.map((project) => (
                                <ProjectCard key={project.title} project={project} number={projects.indexOf(project) + 1} />
                            ))}
                        </AnimatePresence>
                    </motion.ul>
                )}

                {/* Earlier work: coursework and smaller builds, compact rows */}
                {earlier.length > 0 && (
                    <motion.div layout className={featured.length > 0 ? "mt-16" : ""}>
                        <h2 className="text-sm uppercase tracking-[3px] text-customColor2/70 mb-6 text-center xl:text-left">
                            Earlier work &amp; coursework
                        </h2>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            <AnimatePresence mode="popLayout">
                                {earlier.map((project) => (
                                    <CompactCard key={project.title} project={project} number={projects.indexOf(project) + 1} />
                                ))}
                            </AnimatePresence>
                        </ul>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
