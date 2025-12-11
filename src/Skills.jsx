import {
    SiReact,
    SiJavascript,
    SiVite,
    SiCss3,
    SiHtml5,
    SiFigma,
    SiGithub,
    SiTypescript
} from "react-icons/si";

export default function Skill() {
    const tech = [
        { icon: <SiHtml5 />, label: "HTML" },
        { icon: <SiCss3 />, label: "CSS" },
        { icon: <SiJavascript />, label: "JavaScript" },
        { icon: <SiReact />, label: "React" },
        { icon: <SiVite />, label: "Vite" },
        { icon: <SiTypescript />, label: "TypeScript" },
        { icon: <SiFigma />, label: "Figma" },
        { icon: <SiGithub />, label: "GitHub" },
    ];

    const duplicated = tech.concat(tech);

    return (
        <section className="skills-section">
            <h2 className="skills-title">Skills & Expertise</h2>
            <h3 className="skills-subtitle">Tools & Technologies I Work With</h3>

            <div className="skills-marquee">
                <div className="skills-track">
                    {duplicated.map((t, i) => (
                        <div className="skill-card" key={i}>
                            <div className="skill-icon">{t.icon}</div>
                            <p className="skill-label">{t.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
