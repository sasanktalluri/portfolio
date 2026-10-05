import Link from "next/link";
import { FiArrowUp } from "react-icons/fi";
import Social from "./Social";
import { profile } from "@/lib/data";

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-customColor2/10">
            <div className="container mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-customColor2/70">
                <p>
                    © {new Date().getFullYear()} {profile.name} · Built with Next.js & Tailwind
                </p>
                <div className="flex items-center gap-6">
                    <Social
                        containerStyles="flex gap-4"
                        iconStyles="w-8 h-8 rounded-full flex justify-center items-center text-customColor2 hover:text-accent transition-colors"
                    />
                    <Link href="#top" aria-label="Back to top" className="w-8 h-8 rounded-full border border-customColor2/20 flex justify-center items-center hover:border-accent hover:text-accent transition-colors">
                        <FiArrowUp />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
