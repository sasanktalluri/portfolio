"use client";

import { motion } from "framer-motion";
import { profile, experience } from "@/lib/data";

// Token colors, all from the existing theme
const tone = {
    kw: "text-accent",
    key: "text-customColor2",
    str: "text-customColor",
    p: "text-customColor2/50",
    bool: "text-accent",
};

const current = experience[0];

const lines = [
    [["kw", "const "], ["key", "engineer"], ["p", " = {"]],
    [["key", "  name"], ["p", ": "], ["str", `"${profile.name}"`], ["p", ","]],
    [["key", "  role"], ["p", ": "], ["str", `"${current.position}"`], ["p", ","]],
    [["key", "  stack"], ["p", ": ["], ["str", `"Java"`], ["p", ", "], ["str", `"Spring"`], ["p", ", "], ["str", `".NET"`], ["p", ", "], ["str", `"AWS"`], ["p", "],"]],
    [["key", "  focus"], ["p", ": "], ["str", `"distributed systems"`], ["p", ","]],
    [["key", "  location"], ["p", ": "], ["str", `"${profile.location}"`], ["p", ","]],
    [["key", "  openToWork"], ["p", ": "], ["bool", "true"], ["p", ","]],
    [["key", "  openToRelocate"], ["p", ": "], ["bool", "true"], ["p", ","]],
    [["p", "};"]],
];

const CodeCard = () => {
    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
        >
            {/* Glow behind the card */}
            <div aria-hidden className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" />

            <div className="card relative overflow-hidden shadow-2xl shadow-black/40">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-customColor2/10">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]/80" />
                    <span className="ml-3 text-xs text-customColor2/50">sasank.ts</span>
                </div>

                {/* Code */}
                <pre className="p-5 xl:p-6 text-[13px] xl:text-sm leading-7 overflow-x-auto">
                    {lines.map((tokens, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.08, duration: 0.3 }}
                            className="flex"
                        >
                            <span className="w-6 mr-4 text-right select-none text-customColor2/25">{index + 1}</span>
                            <code>
                                {tokens.map(([kind, text], i) => (
                                    <span key={i} className={tone[kind]}>{text}</span>
                                ))}
                                {index === lines.length - 1 && (
                                    <span className="inline-block w-2 h-4 ml-1 align-middle bg-accent animate-blink" />
                                )}
                            </code>
                        </motion.div>
                    ))}
                </pre>
            </div>
        </motion.div>
    );
};

export default CodeCard;
