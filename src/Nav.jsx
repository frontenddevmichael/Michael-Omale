import { useState, useEffect, useRef } from "react";

export default function Nav({ sections }) {
    const [showNav, setShowNav] = useState(true);
    const lastScrollRef = useRef(0);
    const [inHero, setInHero] = useState(true);

    const scrollToSection = (ref, e) => {
        if (e) e.preventDefault();
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const heroTop = sections.Hero.current.offsetTop;
        const heroHeight = sections.Hero.current.offsetHeight;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Check if inside hero section
            const insideHero = currentScroll < heroTop + heroHeight - 50;

            if (insideHero) {
                setInHero(true);
                setShowNav(true);      
                return;              
            }
            setInHero(false);
            if (currentScroll > lastScrollRef.current && currentScroll > 100) {
                setShowNav(false); 
            } else if (currentScroll < lastScrollRef.current) {
                setShowNav(true); 
            }

            lastScrollRef.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections.Hero]);

    return (
        <nav className={`nav ${showNav ? "fade-in" : "fade-out-up"}`}>
            <div className="nav-logo">Omale Michael</div>

            <div className="nav-items">
                <a href="#" onClick={(e) => scrollToSection(sections.Hero, e)}>Home</a>
                <a href="#" onClick={(e) => scrollToSection(sections.About, e)}>About</a>
                <a href="#" onClick={(e) => scrollToSection(sections.Skills, e)}>Skills</a>
                <a href="#" onClick={(e) => scrollToSection(sections.Projects, e)}>Projects</a>
            </div>

            <div className="navbtns">
                <button className="nav-btn" onClick={() => scrollToSection(sections.Contact)}>Contact Me</button>
                <button className="nav-btn hire-me" onClick={() => scrollToSection(sections.Contact)}>Hire Me</button>
            </div>
        </nav>
    );
}
