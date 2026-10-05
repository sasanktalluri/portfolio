"use client";

import { FiScissors, FiHash, FiDatabase, FiZap, FiGitMerge, FiSearch, FiCpu, FiCheckCircle } from "react-icons/fi";
import Reveal from "./Reveal";
import { aiPipeline } from "@/lib/data";

const icons = {
    chunk: <FiScissors />,
    embed: <FiHash />,
    vector: <FiDatabase />,
    cache: <FiZap />,
    agent: <FiGitMerge />,
    search: <FiSearch />,
    llm: <FiCpu />,
    evals: <FiCheckCircle />,
};

// Both lanes use a 5-column grid so steps line up; the connector spans
// from the first step's center to the last step's center.
const COLUMNS = 5;

const Lane = ({ phase, laneIndex }) => {
    const span = phase.steps.length;
    const half = 50 / COLUMNS; // % offset to a column's center
    const lineStyle = { left: `${half}%`, right: `${100 - (span / COLUMNS) * 100 + half}%` };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-[110px_1fr] gap-4 xl:gap-6 items-start">
            {/* Phase label */}
            <div className="flex xl:flex-col items-baseline xl:items-start gap-2 xl:gap-0 xl:pt-3">
                <span className="text-sm font-bold uppercase tracking-[2px] text-accent">{phase.name}</span>
                <span className="text-xs text-customColor2/70">{phase.note}</span>
            </div>

            <ol className="relative grid grid-cols-1 xl:grid-cols-5 gap-5 xl:gap-3">
                {/* Connector with a travelling pulse: horizontal on desktop, vertical on mobile */}
                <span aria-hidden style={lineStyle} className="absolute hidden xl:block top-6 h-px bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 overflow-hidden">
                    <span className="absolute -top-px h-[3px] w-20 rounded-full bg-accent shadow-[0_0_12px_#0dc4d9] animate-flow-x" />
                </span>
                <span aria-hidden className="absolute xl:hidden left-6 top-6 bottom-6 w-px bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20 overflow-hidden">
                    <span className="absolute -left-px w-[3px] h-20 rounded-full bg-accent shadow-[0_0_12px_#0dc4d9] animate-flow-y" />
                </span>

                {phase.steps.map((step, index) => (
                    <Reveal
                        as="li"
                        key={step.name}
                        delay={laneIndex * 0.25 + index * 0.08}
                        className="relative flex xl:flex-col items-center gap-4 xl:gap-3 xl:text-center"
                    >
                        <span className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-primary border border-accent/50 text-accent text-lg flex items-center justify-center hover:bg-accent hover:text-primary hover:scale-110 transition-all duration-300">
                            {icons[step.icon]}
                        </span>
                        <div>
                            <p className="text-sm font-semibold leading-snug">{step.name}</p>
                            <p className="text-[13px] text-customColor2/80 leading-snug mt-1">{step.detail}</p>
                        </div>
                    </Reveal>
                ))}
            </ol>
        </div>
    );
};

const AIPipeline = () => {
    const { label, title, text, phases, stack } = aiPipeline;

    return (
        <div className="card relative overflow-hidden p-8 xl:p-10 group">
            <div aria-hidden className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />

            {/* Heading */}
            <div className="relative flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-10">
                <div className="max-w-[640px]">
                    <span className="eyebrow flex items-center gap-2 mb-3">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
                            <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
                        </span>
                        {label}
                    </span>
                    <h3 className="text-2xl xl:text-3xl font-semibold mb-3 group-hover:text-accent transition-colors">{title}</h3>
                    <p className="text-customColor2 text-sm leading-relaxed">{text}</p>
                </div>
                <ul className="flex flex-wrap gap-2 xl:justify-end xl:max-w-[360px]">
                    {stack.map((tech) => (
                        <li key={tech} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">{tech}</li>
                    ))}
                </ul>
            </div>

            {/* Ingest lane, then query lane (retrieval reads from the vector index) */}
            <div className="relative flex flex-col gap-10">
                {phases.map((phase, index) => (
                    <Lane key={phase.name} phase={phase} laneIndex={index} />
                ))}
            </div>
        </div>
    );
};

export default AIPipeline;
