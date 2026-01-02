import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
    { id: 1, title: "Arktik Light Hyprland", desc: "Sizning hyprland oyna menejeringiz uchun eng go'zal yorqin mavzu", color: "#bc13fe", img: "https://raw.githubusercontent.com/SourceCodeSorcererNuri/arktik-light-v0.01/refs/heads/main/screenshots/screenshot2.png", link: "https://github.com/SourceCodeSorcererNuri/arktik-light-v0.01/" },
    { id: 2, title: "Monochrome Dark Hyprland", desc: "Oq qora qizil ranglardan iborat yangi foydalanuvchilar uchun ishlatishga oson bo'lgan qorong'u mavzu", color: "#ff00ff", img: "https://raw.githubusercontent.com/SourceCodeSorcererNuri/monochrome-dark-v0.01/refs/heads/main/screenshots/screenshot2.png", link: "https://github.com/SourceCodeSorcererNuri/monochrome-dark-v0.01/" },
    { id: 3, title: "NvChad-Nuri", desc: "Neovimga asoslangan hamda NvChad konfiguratsiyasining o'zbek dasturchilari uchun takomillashtrilgan varyanti", color: "#7a04eb", img: "https://raw.githubusercontent.com/SourceCodeSorcererNuri/NvChad-Nuri/main/nvchad-nuri.png", link: "https://github.com/SourceCodeSorcererNuri/NvChad-Nuri/" },
];

const Projects = () => {
    const [position, setPosition] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextProject = () => setPosition((prev) => (prev + 1) % projects.length);
    const prevProject = () => setPosition((prev) => (prev - 1 + projects.length) % projects.length);

    const handleDragEnd = (event, info) => {
        if (info.offset.x < -80) nextProject();
        if (info.offset.x > 80) prevProject();
    };

    const getCardStyles = (index) => {
        const offset = (index - position + projects.length) % projects.length;

        if (offset === 0) return {
            x: 0, scale: 1, opacity: 1, zIndex: 10, rotateY: 0, filter: "blur(0px)"
        };

        const xValue = isMobile ? (offset === 1 ? "105%" : "-105%") : (offset === 1 ? "85%" : "-85%");

        if (offset === 1 || offset === projects.length - 1) return {
            x: xValue,
            scale: 0.65,
            opacity: 0.7,
            zIndex: 5,
            rotateY: offset === 1 ? -35 : 35, // Stronger 3D rotation
            filter: "blur(3px)"
        };

        return { x: 0, scale: 0, opacity: 0, zIndex: 0 };
    };

    return (
        <section id="projects" className="section-projects">
            <div className="bg-wrap">
                <div className="top-plane"></div>
                <div className="bottom-plane"></div>
                <div className="fog-overlay"></div>
            </div>

            <div className="project-header">
                <h2 className="section-title">Loyihalar</h2>
            </div>

            <div className="cards-container">
                <AnimatePresence mode="popLayout">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            drag={isMobile ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                            animate={getCardStyles(i)}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div className="card-inner">
                                <div className="img-reveal-wrapper">
                                    <img src={project.img} alt={project.title} />
                                </div>
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                </div>
                            </div>
                            <a href={project.link}><button className="action-btn">Ma'lumot olish</button></a>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {!isMobile && (
                <>
                    <button className="side-nav-btn left-btn" onClick={prevProject}>&#171;</button>
                    <button className="side-nav-btn right-btn" onClick={nextProject}>&#187;</button>
                </>
            )}

            {isMobile && (
                <div className="mobile-nav-controls">
                    <button onClick={prevProject}>PREV</button>
                    <div className="nav-divider"></div>
                    <button onClick={nextProject}>NEXT</button>
                </div>
            )}
        </section>
    );
};

export default Projects;
