import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import pfpImg from '../assets/PFPNOBGIMG.png'

const deploymentLog = "5 yil davomida dasturlash \nhamda sun'iy intelekt sohalari bo'yicha o'rganish olib bormoqda.\nHamda 2ta to'liq operatsioyon sistema va shaxsiy code editorini ishlab chiqgan.\nBo'sh vaqtda ko'pincha yangi dasturlarni sinab ko'rishni yoqtiradi";

const About = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return (
            <section id="about" className="mobile-about-container">
                {/* 1. Top Status Bar */}
                <div className="m-terminal-header">
                    <span className="m-status-text">STATUS: AKTIV</span>
                    <div className="m-scanner-line"></div>
                </div>

                {/* 2. Side-Aligned Identity Block */}
                <div className="m-identity-grid">
                    <div className="m-pfp-frame">
                        <img src={pfpImg} alt="Subject" className="m-pixel-img" />
                    </div>
                    <div className="m-id-details">
                        <h2 className="m-codename">SOURCECODESORCERER</h2>
                        <p className="m-sub-label">Kasb: Vibe_Coder<br />Tug'ilgan sana: 18.06.2011</p>
                    </div>
                </div>

                {/* 3. The Data Log (Terminal Style) */}
                <div className="m-log-terminal">
                    <div className="m-terminal-top">
                        <div className="m-dot red"></div>
                        <div className="m-dot yellow"></div>
                        <div className="m-dot green"></div>
                        <span className="m-file-name">bio.sh</span>
                    </div>
                    <div className="m-log-body">
                        <span className="m-prompt">$</span> {deploymentLog}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="m-cursor"
                        >_</motion.span>
                    </div>
                </div>

                {/* 4. Technical Specs Overlay */}
                <div className="m-specs-footer">
                    <div className="m-spec-item">
                        <span className="m-label">LOC:</span>
                        <span className="m-val">Surxandaryo, Angor</span>
                    </div>
                    <div className="m-spec-item">
                        <span className="m-label">TEL:</span>
                        <span className="m-val">+998-99-520-0578</span>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="about" className="section-about">
            {/* Decorative Corner Brackets */}
            <div className="corner-decor top-left"></div>
            <div className="corner-decor bottom-right"></div>

            <div className='bg-top-text'>
                <motion.h1
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 0.2 }}
                >
                    VIBE_CODER
                </motion.h1>
                <h1>18.06.2011 <br /></h1>
            </div>

            <div className='bg-big-text'>
                <motion.h1
                    animate={{
                        x: [-1, 1, -1, 0],
                        filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
                    }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className='big-text'
                >
                    SOURCECODESORCERER
                </motion.h1>
            </div>

            <div className='bg-bottom-text'>
                <div className='first'>
                    <span style={{ color: '#00ff41', fontSize: '15px', display: 'block', marginBottom: '5px' }}>
        // DEPLOYMENT_LOG
                    </span>
                    <div style={{
                        whiteSpace: 'pre-wrap', // This is the secret sauce for new lines and spaces!
                        display: 'inline'
                    }}>
                        {deploymentLog.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.03,
                                    duration: 0.1
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        {/* Optional: Add a blinking cursor at the end */}
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            style={{ borderLeft: '8px solid #00ff41', marginLeft: '2px' }}
                        >
                            &nbsp;
                        </motion.span>
                    </div>
                </div>
                <p className='second'>SURXANDARYO, ANGOR <br /> TEL: +998-99-520-0578</p>
            </div>

            <div className='myImg'>
                <img src={pfpImg} alt="Picture" />
                {/* Overlaying a cyan/magenta tint for that 'Chromatic Aberration' look */}
                <div className="img-glitch-overlay"></div>
            </div>
        </section>
    );
};

export default About;
