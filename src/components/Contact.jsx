import React, { useState, useEffect, useRef, useMemo } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './Contact.css';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);
    const cardRef = useRef(null);
    const [status, setStatus] = useState('IDLE');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    // State to detect mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [particlesInit, setParticlesInit] = useState(false);

    // 1. Initialize Particles Engine for Mobile
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setParticlesInit(true);
        });

        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 2. Vanta Effect (Only for Desktop)
    useEffect(() => {
        if (!vantaEffect && !isMobile && vantaRef.current) {
            setVantaEffect(NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: false, // Disable for mobile
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                color: 0x00ff88,
                backgroundColor: 0x020a05,
                points: 12.00,
                maxDistance: 18.00,
                spacing: 20.00,
            }));
        }
        return () => { if (vantaEffect) vantaEffect.destroy(); };
    }, [vantaEffect, isMobile]);

    // 3. Particles Config (Mobile Alternative)
    const particlesOptions = useMemo(() => ({
        fullScreen: { enable: false }, // THIS IS THE KEY: stops it from covering other sections
        background: {
            color: { value: "transparent" } // Set to transparent so it doesn't hide Vanta if they overlap
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
            },
        },
        particles: {
            color: { value: "#00ff88" },
            links: {
                color: "#ffffff",
                distance: 400,
                enable: true,
                opacity: 1,
                width: 1
            },
            move: { enable: true, speed: 1.5 },
            number: { density: { enable: true }, value: 80 },
            opacity: { value: 1 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
    }), []);

    const handleMouseMove = (e) => {
        if (!cardRef.current || isMobile) return;
        const rect = cardRef.current.getBoundingClientRect();
        cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SENDING');

        // Tokenlarni .env fayldan o'qiymiz
        const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        const telegramMessage = `
<b>🚀 Yangi Xabar!</b>
<b>👤 Ism:</b> ${formData.name}
<b>📧 Email:</b> ${formData.email}
<b>💬 Xabar:</b> ${formData.message}
    `;

        try {
            // To'g'ridan-to'g'ri Telegram API ga yuboramiz (Localhostda ishlashi uchun)
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: telegramMessage,
                    parse_mode: 'HTML',
                }),
            });

            if (response.ok) {
                setStatus('SUCCESS');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Telegram xatosi yuz berdi');
            }
        } catch (error) {
            console.error("Xato:", error);
            alert("Xabar yuborilmadi. Botni 'Start' qilganingizni tekshiring!");
            setStatus('IDLE');
        }
    };

    return (
        <section className="contact-wrapper" ref={vantaRef}>
            {/* Background Layer: Vanta on Desktop, Particles on Mobile */}
            {isMobile && particlesInit && (
                <Particles id="tsparticles" options={particlesOptions} />
            )}

            <AnimatePresence mode="wait">
                {status === 'IDLE' ? (
                    <motion.div
                        ref={cardRef}
                        className={`glass-card ${!isMobile ? 'premium-lighting' : 'mobile-card'}`}
                        onMouseMove={handleMouseMove}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        {!isMobile && <div className="spotlight"></div>}

                        <div className="form-header">
                            <h2 className="green-glitch">Bog'lanish</h2>
                            <p>Xizmat zarur bo'lsa xabar qoldiring</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <FiUser className="input-icon" />
                                <input type="text" placeholder=" " name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                <label>Ism</label>
                            </div>
                            <div className="input-group">
                                <FiMail className="input-icon" />
                                <input type="email" placeholder=" " name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                <label>Email</label>
                            </div>
                            <div className="input-group">
                                <FiMessageSquare className="input-icon" />
                                <textarea placeholder=" " name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required></textarea>
                                <label>Xabar</label>
                            </div>
                            <button type="submit" className="green-glass-btn">
                                <FiSend /> Jo'natish
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div key="status" className="status-card glass-card">
                        <div className="success-content">
                            <div className="terminal-loader">
                                {status === 'SENDING' ? <span>] SHIFRLANMOQDA...</span> : <span><FiCheckCircle className="check-icon-large" /> MUVAFFAQIYATLI_JO'NATILDI</span>}
                            </div>
                            {status === 'SUCCESS' && <button onClick={() => setStatus('IDLE')} className="reset-btn">QAYTA_JO'NATISH</button>}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
