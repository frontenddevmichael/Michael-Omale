import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Resize canvas
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Dynamic settings based on screen size
        const isSmallScreen = () => window.innerWidth < 900;
        const particleCount = isSmallScreen() ? 40 : 120;
        const linkDistance = isSmallScreen() ? 60 : 120;
        const particleSizeMultiplier = isSmallScreen() ? 0.6 : 1;

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.radius = (Math.random() * 2 + 1) * particleSizeMultiplier;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(128, 128, 128, 0.9)";
                ctx.fill();
            }
        }

        // Create particles
        let particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animate particles
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.update();
                p.draw();

                // Draw connecting lines
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x;
                    const dy = p.y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < linkDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0,0,0,${1 - dist / linkDistance})`;
                        ctx.lineWidth = 0.3;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100vw",
                height: "100vh",
                background: "transparent",
                pointerEvents: "none",
            }}
        />
    );
}
