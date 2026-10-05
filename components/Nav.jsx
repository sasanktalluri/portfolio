"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {/* Contact lives in the "Hire me" button on desktop */}
            {navLinks.filter((link) => link.path !== "/contact").map((link) => {
                const active = link.path === pathname;
                return (
                    <Link
                        href={link.path}
                        key={link.path}
                        className={`relative capitalize font-medium transition-colors hover:text-accent ${active ? "text-accent" : ""}`}
                    >
                        {link.name}
                        {/* Underline slides between links */}
                        {active && (
                            <motion.span
                                layoutId="nav-underline"
                                className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-accent"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
