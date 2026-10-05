"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

// Component imports
import Nav from "./Nav"
import MobileNav from "./MobileNav";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    // Compact, blurred header once the page scrolls
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-30 text-customColor border-b transition-all duration-300 ${
                scrolled
                    ? "py-4 bg-primary/75 backdrop-blur-md border-customColor2/10"
                    : "py-8 xl:py-10 border-transparent"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="group">
                    <span className="text-4xl font-semibold group-hover:text-accent transition-colors">
                        &quot;ST&quot; <span className="text-accent">.</span>
                    </span>
                </Link>

                {/* Desktop navigation & Contact me button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Button asChild>
                        <Link href="/contact">Hire me</Link>
                    </Button>
                </div>

                {/* Mobile navigation */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    );
}

export default Header;
