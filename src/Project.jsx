import Bellsride from "./assets/Bellsride.png"
import Trust from "./assets/Trust.png"
import Echo from "./assets/Echo.png"
import JudgeHub from "./assets/JudgeHub.png"
import Cline from "./assets/Cline.png"
const projects = [
    {
        title: "Trust Okoduwa Portfolio Page",
        description: "Trust Okoduwa — A clean, modern creative-agency website showcasing brand identity, UI/UX and creative-design services. Built to present design specialties like brand strategy, interface design, campaign visuals and more, the site demonstrates my ability to build elegant digital experiences and present a full design portfolio. It’s a live-project example of how I translate creative thinking into polished, professional web presence.",
        tech: ["HTML", "CSS", "JS"],
        img:Trust,
        link: "https://trust-okoduwa.vercel.app/",
    },
    {
        title: "EhcoAI",
        description: "Echo AI Assistant — An evolving AI-powered coding assistant built for fast, conversational problem-solving. It supports both voice and text interactions, helping developers debug, generate snippets, and understand concepts on the fly. The project is still actively in development, with ongoing UI refinement and expanding AI capabilities as it moves toward a fully polished production release.",
        tech: ["HTML", "CSS", "JS"],
        img:Echo,
        link: "https://echoaiassitant.netlify.app/",
    },
    {
        title: "CLine streaming Platform",
        description: "Cline-Stream — A work-in-progress web app aiming to deliver a modern streaming experience (live / on-demand). Built with the latest web tech and intended to offer a sleek, user-friendly interface, Cline-Stream is currently in active development while I fine-tune its core features and polish the user flow.",
        tech: ["HTML", "CSS", "JS"],
        img: Cline,
        link: "https://cline-stream.vercel.app/",
    },

    {
        title: "Bells Ride",
        description: "Bells Ride Share — A ride-sharing web app prototype geared toward connecting drivers and riders for efficient shared transport. Designed with a clean, modern UI and intuitive flow, the platform aims to simplify booking and matching rides. Currently under active development — core features are still being built and tested before launching a full public release.",
        tech: ["React", "Tailwind", "Vite"],
        img: Bellsride,
        link: "https://bells-ride-share.vercel.app/"
    },

    {
        title: "Judge Hub",
        description:"Judg Hub — A work-in-progress web app designed to streamline scoring and evaluation for competitions, contests or events. Built with a polished UI and flexible workflow structure, the platform aims to simplify submission handling, judging, and results management in one unified interface. Currently under active development — core features and user flows are being refined ahead of a full release.",
        tech:["React","Tailwind" , "JS"],
        img:JudgeHub,
        link:"https://judging-platform.vercel.app/"
    }
];

export default function Project() {
    return (
        <section className="Project-section">
            <div className="dot-container">
            </div>

            <div className="project-grid">
                {projects.map((proj, idx) => (
                    <div key={idx} className="project-card white-card">
                        {proj.img && (
                            <div className="project-image">
                                <img src={proj.img} alt={proj.title} />
                            </div>
                        )}
                        <div className="project-content">
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                            <div className="tech-tags">
                                {proj.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                            <a href={proj.link} className="cta">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
                
        </section>
    );
}
