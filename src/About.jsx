import Aboutimg from "./assets/Aboutimg.png"
import aboutoutline from "./assets/aboutoutline.png"

export default function About() {
    return (
        <section className="About-section">
            <h2>About me</h2>
            <h3>Get to know more about my journey and expertise</h3>

            <div className="aboutContent">

                <div className="abouttxt">
                    <p>
                        I'm a  Frontend Developer and the founder of OCM Devs, based in Lagos, Nigeria. Currently pursuing a degree in Computer Science, I’m dedicated to  to building beautiful, functional, and user-centered digital experiences.
                    </p>
                    <p>
                        I have a growing interest in AI development and actively explore tools like Loveable, MGX, and other AI platforms to integrate intelligent solutions into web projects.
                    </p>
                        <div className="aboutExt">
                            <span>
                                <h2>2+</h2>
                                    <p>Years Experience</p>
                            </span>
                            <span>
                                <h2>10+</h2>
                                    <p>Projects Completed</p>
                            </span>
                            <span>
                                <h2>80%</h2>
                                    <p>Client Satisfaction</p>
                            </span>
                        </div>
                </div>

                <div className="aboutimg">
                    <img src={Aboutimg} alt="About" />
                    <img src={aboutoutline} alt="Outline" />
                </div>

            </div>
        </section>
    );
}
