"use client";

import { motion, useReducedMotion } from "framer-motion";

// template.jsx re-mounts on every navigation, so this runs on each page change.
const COLUMNS = 5;
const EASE = [0.76, 0, 0.24, 1];

export default function Template({ children }) {
    const reduceMotion = useReducedMotion();

    return (
        <>
            {/* Curtain: columns retract upward to reveal the new page */}
            {!reduceMotion && (
                <div aria-hidden className="pointer-events-none fixed inset-0 z-20 flex overflow-hidden">
                    {Array.from({ length: COLUMNS }).map((_, index) => (
                        <motion.div
                            key={index}
                            className="relative h-full flex-1 bg-surface origin-top"
                            initial={{ scaleY: 1 }}
                            animate={{ scaleY: 0 }}
                            transition={{ duration: 0.35, ease: EASE, delay: index * 0.04 }}
                        >
                            <span className="absolute inset-x-0 bottom-0 h-[3px] bg-accent" />
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Page content */}
            <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: reduceMotion ? 0 : 0.1 }}
            >
                {children}
            </motion.div>
        </>
    );
}
