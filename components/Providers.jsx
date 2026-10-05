"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";

const Providers = ({ children }) => {
    // Cursor-following glow on any .card (see globals.css)
    useEffect(() => {
        const onMove = (event) => {
            const card = event.target.closest?.(".card");
            if (!card) return;
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${event.clientX - rect.left}px`);
            card.style.setProperty("--y", `${event.clientY - rect.top}px`);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export default Providers;
