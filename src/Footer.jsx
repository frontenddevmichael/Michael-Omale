import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="Footer">
            {/* About / Branding */}
            <div className="footer-section about">
                <h2>Omale Michael</h2>
                <p>
                    Frontend Developer & UI/UX Designer. I craft modern, responsive, and
                    user-friendly websites and applications. Always open to collaboration
                    and freelance opportunities.
                </p>
            </div>

            {/* Quick Links / Nav */}
            <div className="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#" onClick={(e) => scrollToSection(sections.Hero, e)}>Home</a></li>
                    <li><a href="#" onClick={(e) => scrollToSection(sections.About, e)}>About Me</a></li>
                    <li><a href="#" onClick={(e) => scrollToSection(sections.Skills, e)}>Skills</a></li>
                    <li><a href="#" onClick={(e) => scrollToSection(sections.Projects, e)}>Projects</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section contact">
                <h3>Contact Me</h3>
                <p>omalemcmails@gmail.com</p>
                <p> +234 906 171 2509</p>
                <div className="footersocials">
                    <a href="https://github.com/frontenddevmichael" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/michael-omale-b63406354//" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
            </div>

            {/* Footer Bottom / Copyright */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Omale Michael. All rights reserved.</p>
            </div>
        </footer>
    );
}
