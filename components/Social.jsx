import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import { profile } from "@/lib/data";

const socials = [
    { icon: <FaGithub />, path: profile.github, label: "GitHub" },
    { icon: <FaLinkedinIn />, path: profile.linkedin, label: "LinkedIn" },
    { icon: <FaEnvelope />, path: `mailto:${profile.email}`, label: "Email" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link
                    key={index}
                    href={item.path}
                    className={iconStyles}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                >{item.icon}</Link>
            })}
        </div>
    );
};

export default Social;