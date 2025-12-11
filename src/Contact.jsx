import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function Contact() {
    const socials = [
        { name: "Email", icon: <AiOutlineMail size={24} />, link: "mailto:omalemcmails@gmail.com" },
        { name: "WhatsApp", icon: <FaWhatsapp size={24} />, link: "https://wa.me/2349061712509" },
        { name: "LinkedIn", icon: <AiOutlineLinkedin size={24} />, link: "https://www.linkedin.com/in/michael-omale-b63406354/" },
        { name: "GitHub", icon: <AiOutlineGithub size={24} />, link: "https://github.com/frontenddevmichael" },
    ];

    return (
        <section className="contact-section">
            <div className="contact-header">
                <h2>Let’s Build Something Exceptional</h2>
                <p>
                    I’m always excited to collaborate on innovative projects, solve
                    challenging problems, or help bring your ideas to life.
                    Reach out via any of the methods below!
                </p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Contact Info</h3>
                    <div className="contact-details">
                        <p>Email: omalemcmails@gmail.com</p>
                        <p>Phone: +234 906 171 2509</p>
                        <p>Location: Lagos, Nigeria</p>
                    </div>
                    <div className="socials">
                        <h4>Connect with me</h4>
                        <div className="social-icons">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    {social.icon}
                                    <span>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form method="post">
                        <input type="text" placeholder="Your full name" required />
                        <input type="email" placeholder="Your email address" required />
                        <textarea placeholder="Write your message..." required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
