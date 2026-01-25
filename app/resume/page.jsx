"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const metadata = {
    title: "Resume"
}

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaJava
} from 'react-icons/fa';

import {
    SiTailwindcss,
    SiNextdotjs,
    SiPython,
    SiUnity,
    SiUnrealengine,
    SiGodotengine,
    SiCsharp,
    SiCplusplus,
    SiThreedotjs,
    SiBlender,
    SiGit,
    SiFlask,
    SiNumpy,
    SiPandas,
    SiPytorch,
    SiTensorflow,
    SiAmazonaws,
    SiDocker,
    SiSpring,
    SiDotnet,
    SiPostgresql,
    SiMysql,
    SiRedis,
    SiJenkins,
    SiKubernetes,
    SiTypescript,
    SiAngular,
    SiMongodb,
    SiPostman,
    SiJira,
    SiConfluence
} from "react-icons/si";


const about = {
    title: "About me",
    description: "Some of the personal information about me!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Sasank Dattu Talluri"
        },

        {
            fieldName: "Experience",
            fieldValue: "3+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Languages",
            fieldValue: "English"
        },
    ]
};

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Software Engineer with 3+ years of experience building scalable full-stack applications, RESTful APIs, and cloud-ready backend services.",
    items: [
        {
            company: "Rebecca Everlene Trust",
            position: "Software Developer",
            duration: "Feb 2025 - Present"
        },
        {
            company: "Cox Communications",
            position: "Specialist Engineer",
            duration: "June 2022 - Aug 2023"
        },
        {
            company: "iBridge Techsoft",
            position: "Software Engineer",
            duration: "June 2020 - May 2022"
        }
    ]
};

const education = {
    icon: "",
    title: "My education",
    description: "Overview of my academic background. This includes details such as my degrees, certifications, courses, and any relevant academic achievements.",
    items: [
        {
            institution: "University at Buffalo",
            degree: "MS in Computer Science",
            duration: "2023 - 2025"
        },
        {
            institution: "Infosys",
            degree: "Certified Spring Microservices Dev",
            duration: "Certified"
        },
        {
            institution: "Cisco Networking Academy",
            degree: "PCAP - Python Essentials",
            duration: "Certified"
        }
    ]
};

const skills = {
    title: "My skills",
    description: "Showcase of my proficiency in various areas relevant to my field or industry, which include technical skills, as well as soft skills.",
    skillList: [
        {
            icon: <FaJava />,
            name: "Java"
        },
        {
            icon: <SiSpring />,
            name: "Spring Boot"
        },
        {
            icon: <SiDotnet />,
            name: ".NET"
        },
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <SiAmazonaws />,
            name: "AWS"
        },
        {
            icon: <SiDocker />,
            name: "Docker"
        },
        {
            icon: <SiJenkins />,
            name: "Jenkins"
        },
        {
            icon: <SiKubernetes />,
            name: "Kubernetes"
        },
        {
            icon: <SiMysql />,
            name: "MySQL"
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL"
        },
        {
            icon: <SiRedis />,
            name: "Redis"
        },
        {
            icon: <SiPython />,
            name: "Python"
        },
        {
            icon: <FaHtml5 />,
            name: "HTML 5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3"
        },
        {
            icon: <SiCsharp />,
            name: "C#"
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript"
        },
        {
            icon: <SiAngular />,
            name: "Angular"
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB"
        },
        {
            icon: <SiGit />,
            name: "Git"
        },
        {
            icon: <SiPostman />,
            name: "Postman"
        },
        {
            icon: <SiJira />,
            name: "JIRA"
        },

        {
            icon: <SiCplusplus />,
            name: "C/C++"
        },

    ]
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* Content */}
                    <div className="min-h-[70vh] w-full h-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-customColor2 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[600px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-customColor2">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Education */}
                        <TabsContent value="education" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-customColor2 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[600px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-customColor2">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-customColor2 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[600px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-customColor2 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-customColor2">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;