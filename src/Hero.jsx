import React from "react";
import GalaxyBackground from "./GalaxyBackground";

export default function Hero({ sections }) {

    const scrollToSection = (ref, e) => {
        if (e) e.preventDefault();
        if (!ref?.current) return;
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <section className="hero-section">
                <div className="hero-text">
                    <div className="floating-pills">
                        <div className="pill">React</div>
                        <div className="pill accent">UI/UX</div>
                        <div className="pill">JavaScript</div>
                        <div className="pill">CSS</div>
                        <div className="pill accent">Frontend</div>
                        <div className="pill">Vite</div>
                    </div>

                    <h1>Omale Michael</h1>
                    <p>Frontend Developer | <span>UI/UX Designer.</span></p>

                    <div className="hero-btns">
                        <button
                            className="hero-btn"
                            onClick={(e) => scrollToSection(sections.Contact, e)}
                        >
                            Hire Me
                        </button>

                        <button
                            className="hero-btn"
                            onClick={(e) => scrollToSection(sections.Projects, e)}
                        >
                            View my work
                        </button>
                    </div>
                </div>
            </section>

            <GalaxyBackground />
        </>
    );
}
