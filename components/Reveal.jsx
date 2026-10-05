"use client";

import { motion } from "framer-motion";

// Fades children up once they scroll into view.
const Reveal = ({ as = "div", delay = 0, className, children, ...props }) => {
    const Component = motion[as];
    return (
        <Component
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
            className={className}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Reveal;
