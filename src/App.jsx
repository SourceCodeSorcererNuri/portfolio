import React, { useState } from 'react'; // 1. Added useState import
import { motion, AnimatePresence } from 'framer-motion';
import { FaYoutube, FaInstagram, FaTelegramPlane, FaGithub } from 'react-icons/fa';
import pfpImage from './assets/PFPimg.jpg';
import './App.css';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

// Variables that NEVER change can stay outside
const MySelf = {
    name: "Nuriddin",
    lastName: "Abduraxmonov",
    Image: pfpImage,
};

const menuItems = [
    { name: "UY", link: "#home" },
    { name: "HAQIMDA", link: "#about" },
    { name: "LOYIHALAR", link: "#projects" },
    { name: "XABAR_QOLDIRISH", link: "#contact" }
];



// Background wires (ensure path56, path11, and path21 are NOT in this list)
const circuitPaths = [
    "M 126.33457,-0.52916663 V 30.626563 l 37.42903,1.093806 23.64127,21.465105",
    "M 0,0 31.173465,31.173465 H 97.348716 L 120.86554,54.69029 h 24.61063 l 32.80802,30.231669",
    "M 179.99654,-0.52916502 208.11539,27.589686",
    "m 0,202.90097 89.769306,0.54691 56.872914,32.83559 h 76.49416 L 254,215.75319 l 0.0364,-53.65836",
    "m 280.56117,285.75 33.49443,-33.49442 0.96046,-57.63203 -26.53928,-39.06805",
    "M 375.7223,286.27916 375.17538,221.7055 352.12776,181.78584 H 328.68864 L 315.54523,160.24255 V 135.08501",
    "M 419.47451,285.75 392.54295,258.81841 V 189.7753 l 27.68525,-27.68526 0.34013,-35.47169 -26.6667,-26.666682 h -60.29086",
    "M 254,0 V 16.407087",
    "M 364.23732,-0.52916502 344.23638,15.860184 318.33326,15.723459 302.65222,28.118851",
    "M 436.21875,-1.05833 V 35.248336 L 405.8898,65.577293 325.1441,65.548827",
    "m 507.99999,221.7055 -34.59493,-34.59494 0.34483,-44.61722",
    "M 507.99999,66.106457 H 465.60938 L 428.8568,87.325572",
    "M 460.19532,286.27916 V 244.40625"
];

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='app-container'>
            <section className='snap-section' id="home">
                <svg className="background-svg" viewBox="0 0 508 285.75" preserveAspectRatio="xMidYMid slice">

                    {/* 1. BACKGROUND WIRES (Low Opacity) */}
                    {circuitPaths.map((pathD, index) => (
                        <motion.path
                            key={`path-${index}`}
                            d={pathD}
                            stroke="#00f2ff"
                            strokeWidth="0.8"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.25 }}
                            transition={{ duration: 2, delay: index * 0.1 }}
                        />
                    ))}

                    {/* 2. GROUP g79 (The one you just asked for) */}
                    <motion.g id="g79">
                        <motion.path
                            id="path56"
                            d="M 0,285.75 35.753905,249.99609 H 100.54688"
                            stroke="#00f2ff"
                            strokeWidth="1.05"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                        <motion.ellipse
                            id="ellipse57"
                            cx="101.22106" cy="249.99609" rx="7.46" ry="7.46"
                            stroke="#00f2ff" strokeWidth="0.9" fill="none"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.0, type: "spring" }}
                        />
                        <motion.ellipse
                            id="ellipse58"
                            cx="101.22106" cy="249.99609" rx="2.17" ry="2.18"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 1, 1] }}
                            transition={{ delay: 2.2, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 3. GROUP g76 (Heartbeat Node) */}
                    <motion.g id="g76">
                        <motion.path
                            d="M -0.529,78.46 H 60.15 l 39.79,39.79 h 50.44 29.66"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.8 }}
                        />
                        <motion.ellipse
                            cx="180.59694" cy="118.48805" rx="7.46" ry="7.46"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 2.8, type: "spring" }}
                        />
                        <motion.ellipse
                            cx="180.79694" cy="118.48805" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.0, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 4. GROUP g74 (Lower Node) */}
                    <motion.g id="g74">
                        <motion.path
                            d="m -1,157.5 35.54,-35.54 h 49.55 l 33.48,37.65 74.91,0.12 10.76,-7.76"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="203.26076" cy="150.79782" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="203.26076" cy="150.79782" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g64*/}
                    <motion.g id="g64">
                        <motion.path
                            d="M 254,0 V 16.407087"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="254" cy="16.936253" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="254.2" cy="16.936253" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g64*/}
                    <motion.g id="g64">
                        <motion.path
                            d="M 0,0 31.173465,31.173465 H 97.348716 L 120.86554,54.69029 h 24.61063 l 32.80802,30.231669"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="178.28419" cy="84.921959" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="178.28419" cy="84.921959" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g63*/}
                    <motion.g id="g63">
                        <motion.path
                            d="M 179.99654,-0.52916502 208.11539,27.589686"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="208.64456" cy="28.118851" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="208.64456" cy="28.118851" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g62*/}
                    <motion.g id="g62">
                        <motion.path
                            d="M 126.33457,-0.52916663 V 30.626563 l 37.42903,1.093806 23.64127,21.465105"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="187.93404" cy="53.714638" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="187.93404" cy="53.714638" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g74*/}
                    <motion.g id="g74">
                        <motion.path
                            d="m -1,157.50803 35.548689,-35.54869 h 49.553013 l 33.480268,37.65052 74.91577,0.12546 10.76302,-7.76468"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="203.26076" cy="150.79782" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="203.26076" cy="150.79782" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g74*/}
                    <motion.g id="g74">
                        <motion.path
                            d="m 0,202.90097 89.769306,0.54691 56.872914,32.83559 h 76.49416 L 254,215.75319 l 0.0364,-53.65836"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="254" cy="162.09483" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="254" cy="162.09483" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g73*/}
                    <motion.g id="g73">
                        <motion.path
                            d="m 280.56117,285.75 33.49443,-33.49442 0.96046,-57.63203 -26.53928,-39.06805"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="288.47678" cy="155.5555" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="288.47678" cy="155.5555" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g72*/}
                    <motion.g id="g72">
                        <motion.path
                            d="M 375.7223,286.27916 375.17538,221.7055 352.12776,181.78584 H 328.68864 L 315.54523,160.24255 V 135.08501"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="315.54523" cy="134.55585" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="315.54523" cy="134.55585" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g80*/}
                    <motion.g id="g80">
                        <motion.path
                            d="M 419.47451,285.75 392.54295,258.81841 V 189.7753 l 27.68525,-27.68526 0.34013,-35.47169 -26.6667,-26.666682 h -60.29086"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="333.22662" cy="99.951668" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="333.22662" cy="99.951668" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g66*/}
                    <motion.g id="g66">
                        <motion.path
                            d="M 436.21875,-1.05833 V 35.248336 L 405.8898,65.577293 325.1441,65.548827"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="324.82495" cy="65.549484" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="324.82495" cy="65.549484" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g65*/}
                    <motion.g id="g65">
                        <motion.path
                            d="M 364.23732,-0.52916502 344.23638,15.860184 318.33326,15.723459 302.65222,28.118851"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="302.65222" cy="28.118851" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="302.65222" cy="28.118851" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g70*/}
                    <motion.g id="g70">
                        <motion.path
                            d="M 460.19532,286.27916 V 244.40625"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="460.19531" cy="242.22035" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="460.19531" cy="242.22035" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>


                    {/* 5. GROUP g69*/}
                    <motion.g id="g69">
                        <motion.path
                            d="m 507.99999,221.7055 -34.59493,-34.59494 0.34483,-44.61722"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="473.74988" cy="140.30743" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="473.74988" cy="140.30743" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g68*/}
                    <motion.g id="g68">
                        <motion.path
                            d="M 507.99999,66.106457 H 465.60938 L 428.8568,87.325572"
                            stroke="#00f2ff" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                        />
                        <motion.ellipse
                            cx="428.32764" cy="87.854736" rx="6.4" ry="6.4"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="428.32764" cy="87.854736" rx="1.5" ry="1.5"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g67*/}
                    <motion.g id="g67">
                        <motion.ellipse
                            cx="472.5495" cy="31.118471" rx="14" ry="14"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="472.5495" cy="31.118471" rx="4" ry="4"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g71*/}
                    <motion.g id="g71">
                        <motion.ellipse
                            cx="368.96786" cy="142.49335" rx="14" ry="14"
                            stroke="#8800ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="368.96786" cy="142.49335" rx="4" ry="4"
                            fill="#8800ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g78*/}
                    <motion.g id="g78">
                        <motion.ellipse
                            cx="60.366295" cy="160.77171" rx="14" ry="14"
                            stroke="#8800ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="60.366295" cy="160.77171" rx="4" ry="4"
                            fill="#8800ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g77*/}
                    <motion.g id="g77">
                        <motion.ellipse
                            cx="123.01473" cy="84.921959" rx="14" ry="14"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="123.01473" cy="84.921959" rx="4" ry="4"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    {/* 5. GROUP g81*/}
                    <motion.g id="g81">
                        <motion.ellipse
                            cx="178.28419" cy="199.075" rx="14" ry="14"
                            stroke="#00f2ff" fill="none"
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            transition={{ delay: 3.2 }}
                        />
                        <motion.ellipse
                            cx="178.28419" cy="199.075" rx="4" ry="4"
                            fill="#00f2ff"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ delay: 3.4, duration: 2, repeat: Infinity }}
                        />
                    </motion.g>

                    <foreignObject x="80" y="-85" width="350" height="350">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 2.5, type: "spring" }}
                            style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <img
                                src={MySelf.Image}
                                alt="Nuriddin"
                                className="pfpImg-svg"
                            />
                        </motion.div>
                    </foreignObject>

                </svg>

                {/* 2. UI CONTENT LAYER */}
                <div className='content'>
                    {/* NAME */}
                    <motion.h1 className='name' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
                        {MySelf.name} <span className="highlight">{MySelf.lastName}</span>
                    </motion.h1>

                    {/* DESCRIPTION SECTION */}
                    <motion.div
                        className="bio-card"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.2 }}
                    >
                        <p className="bio-text">
                            Yaratuvchan dasturchi & Texnika muhandisi <br />
                            Linuxni O'zbekistonda ko'proq tarqatishga harakat qilyotgan <br />Yosh yigit.
                        </p>
                    </motion.div>

                    <div className='social-container'>
                        {[
                            { icon: <FaYoutube />, link: "https://youtube.com/@source_code_sorcerer" },
                            { icon: <FaInstagram />, link: "https://instagram.com/source_code_sorcerer" },
                            { icon: <FaTelegramPlane />, link: "https://t.me/SourceCodeSorcerer" },
                            { icon: <FaGithub />, link: "https://github.com/SourceCodeSorcerer" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-round-btn"
                                // Entrance Animation
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.5 + (i * 0.15), // Staggered appearance
                                    ease: [0.23, 1, 0.32, 1] // Smooth overshoot ease
                                }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
            <section className="snap-section" id="about">
                <About />
            </section>
            <section className='snap-section' id="projects">
                <Projects />
            </section>
            <section className='snap-section' id="contact">
                <Contact />
            </section>
            <div className="menu-container">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="menu-list"
                            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                        >
                            {menuItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.link}
                                    className="menu-link"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <span className="menu-index">0{i}</span> {item.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* THE ROUND BUTTON */}
                <motion.button
                    className={`terminal-button ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="button-inner"></div>
                    <div className="button-ring"></div>
                </motion.button>
            </div>
        </div>
    );
}

export default App;
