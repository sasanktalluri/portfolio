"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import ProjectSliderBtns from "@/components/ProjectSliderBtns";

const metadata = {
    title: "Projects"
}
const projects = [
    {
        title: "GenAI Chatbot with Context",
        description:
            "Built a low-latency backend for real-time query responses using FastAPI and REST APIs with a RAG pipeline powered by ChromaDB and LangChain. Implemented document ingestion (chunking, embeddings, metadata) to improve retrieval relevance, and added async streaming via SSE for a more responsive user experience. Used MongoDB for lightweight user/session data and Redis caching to reduce repeated work; documented API contracts, error handling, and deployment steps for maintainability.",
        stack: [
            { name: "FastAPI" },
            { name: "ChromaDB" },
            { name: "LangChain" },
            { name: "MongoDB" },
            { name: "Redis" },
            { name: "GPT-4" },
            { name: "AsyncIO" },
        ],
        live: "N/A",
        github: "https://github.com/sasanktalluri",
    },
    {
        title: "Fresh Veggies – Android Application",
        description:
            "Built an Android application with a clean workflow for listing and purchasing items, integrating a Firebase backend for real-time updates. Designed modular UI components, added input validation, and improved usability with predictable navigation and reliable data synchronization.",
        stack: [{ name: "Java" }, { name: "Firebase" }],
        live: "N/A",
        github: "https://github.com/sasanktalluri/FreshVeggiesApp",
    },
    {
        title: "Pintos Operating System",
        description:
            "Implemented core OS features including scheduling, synchronization primitives, and system call handling. Debugged low-level concurrency and memory issues, strengthening fundamentals in systems design, troubleshooting, and thread-safe programming.",
        stack: [
            { name: "C" },
            { name: "C++" },
            { name: "Multithreading" },
            { name: "OS Architecture" },
        ],
        live: "N/A",
        github: "https://github.com/sasanktalluri",
    },
    {
        title: "DMQL – Database Design and Web Application for SQL Query Operations",
        description:
            "Designed a PostgreSQL database from scratch by creating an ERD, converting it to a relational model, and normalizing to BCNF. Populated tables with thousands of records and implemented SQL operations (SELECT/INSERT/UPDATE/DELETE), including advanced JOINs and subqueries. Built a Django REST API and a JavaScript web UI that allows users to input SQL queries and view results, and improved performance through indexing and query optimization using response-time monitoring.",
        stack: [{ name: "PostgreSQL" }, { name: "Django REST" }, { name: "JavaScript" }],
        live: "N/A",
        github: "https://github.com/sasanktalluri/DMQL",
    },
    {
        title: "VisTrack – Visitor Tracking Platform",
        description:
            "Developed a full-stack application with Spring Boot microservices and a React frontend for visitor check-ins, services, and payments. Integrated OCR workflows using Google Vision API to extract receipt data and persist transactions, and implemented secure authentication using JWT. Added consistent error handling and documentation for APIs, workflows, and deployment steps.",
        stack: [
            { name: "React.js" },
            { name: "Spring Boot" },
            { name: "MySQL" },
            { name: "Google Vision API" },
            { name: "JWT" },
        ],
        live: "N/A",
        github: "https://github.com/sasanktalluri/VisitorTrackingBackend",
    },
    {
        title: "JDBC Connectivity – Amigo Wallet",
        description:
            "Demonstrates JDBC connectivity with PostgreSQL using Java and Maven by connecting to the database, inserting records into a table, and retrieving data for verification. Uses Maven for dependency management. Current implementation uses JDBC Statement (not PreparedStatement), which is vulnerable to SQL injection; a recommended improvement is migrating to parameterized PreparedStatement queries.",
        stack: [{ name: "Java" }],
        live: "N/A",
        github: "https://github.com/sasanktalluri/JDBC_Connectivity",
    },
    {
        title: "CLI Chat Multi-Threaded",
        description:
            "Built a multithreaded chat application in Java using socket programming. Implemented a server that supports multiple simultaneous clients with a dedicated thread per client, real-time message broadcasting, and thread-safe handling of active client connections. Added a logout flow for graceful client disconnection.",
        stack: [{ name: "Java" }],
        live: "N/A",
        github: "https://github.com/sasanktalluri/CLI_Chat_Multi_Threaded",
    },
];


const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                            {/* Outline number */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {(projects.findIndex(p => p === project) + 1).toString().padStart(2, '0')}
                            </div>
                            {/* Project category */}
                            <h2 className="text-[42px] font-bold leading-none text-customColor group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* Project description */}
                            <p className="text-customColor2">{project.description}</p>
                            {/* Stack */}
                            <ul className="flex gap-2 flex-wrap">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* Border */}
                            <div className="border border-customColor2/20"></div>
                            {/* Buttons Container */}
                            <div className="flex items-center justify-between">
                                {/* Github & Live Buttons */}
                                <div className="flex items-center gap-4">
                                    {/* Live project btn */}
                                    {project.live !== "N/A" && (
                                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                        <BsArrowUpRight className="text-customColor2 text-3xl group-hover:text-accent stroke-1" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Live project</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                    )}
                                    {/* Github project btn */}
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-customColor2 text-3xl group-hover:text-accent stroke-0" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                                {/* Slider Buttons */}
                                <div className="w-[200px]">
                                    <Swiper
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        className="h-12"
                                        onSlideChange={handleSlideChange}
                                    >
                                        {projects.map((project, index) => {
                                            return (
                                                <SwiperSlide key={index} className="w-full">
                                                </SwiperSlide>
                                            );
                                        })}

                                        <ProjectSliderBtns
                                            containerStyles="flex gap-2 absolute right-0 top-0 z-20 w-full justify-end"
                                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all bg-sky-500 rounded text-black"
                                        />
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;