import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Change", "Manage", "Convert"];

export default function About() {
  const [index, setIndex] = useState(0);
  // state nyimpan tab yang akan dibuka
  const [activeTab, setActiveTab] = useState("quality");
  const [slider, setSlider] = useState(50);

  const [activestep, setActivestep] = useState("input");
  const videoref = useRef(null);
  const step_desc = {
    input: "Users upload their files safely into our system",
    encrypt: "Your file is encrypted end-to-end using AES-256 before processing",
    convert: "Our server converts your file to the target format",
    delete: "Converted files and original uploads automatically deleted permanently"
  };

  useEffect(() => {
    if(videoref.current){
      videoref.current.defaultMuted = true;
      videoref.current.muted = true;
      videoref.current.play().catch((error) => {
        console.log("Autoplay failed", error);
      });
    }
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#333] text-white">
      {/* Navbar */}
      {/* Main */}
      <main className="w-full mt-[60px] flex flex-col">
        {/* Slide 1 : What is file converter*/}
        <section className="w-full min-h-[calc(100vh-60px)] flex items-center justify-center px-6 lg:px-10 py-20 lg:py-32">
          <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 items-center mx-auto my-auto">
            
            {/* Left Content Container */}
            <div className="md:col-span-7 flex flex-col text-center md:text-left items-center md:items-start">
              <h1 className="text-4xl lg:text-5xl mt-2 mb-6 font-bold leading-tight">
                What is <span className="text-blue-300">FileConverter?</span>
              </h1>

              <div className="text-2xl lg:text-3xl leading-relaxed flex flex-wrap items-baseline justify-center md:justify-start gap-x-2">
                <span>An easy to use web application that allows</span>
                
                <span className="inline-flex items-baseline gap-x-2 whitespace-nowrap">
                  <span>you to</span>
                  <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-[1.3em] min-w-[3.8em] align-baseline">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={words[index]}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="col-start-1 row-start-1 font-bold text-blue-300"
                      >
                        {words[index]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>

                <span>your file effortlessly</span>
              </div>

              <p className="text-blue-300 text-lg lg:text-xl font-semibold mt-6 tracking-wide">
                Designed for speed and simplicity.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col items-center justify-center w-full">
              <div className="bg-[#444] border-3 border-white p-2 sm:p-4 rounded-2xl w-full max-h-[500px] aspect-video overflow-hidden shadow-2xl flex items-center justify-center">
                <video ref = {videoref} autoPlay loop muted playsInline preload = "auto" className="w-full h-full object-cover rounded-lg pointer-events-none">
                  <source src="/demo_video.webm" type="video/webm" /> 
                  Browser tidak mendukung pemutaran video
                </video>
              </div>
            </div>

          </div>
        </section>

        <section className="w-full min-h-[calc(100vh-60px)] flex flex-col items-center justify-center px-10 py-24 border-t border-slate-700/50">
          <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-8 mx-auto">
            <h1 className="text-white font-bold text-4xl lg:text-3xl text-center">
              Why Choose Our File Converter?
            </h1>
            <div className="flex gap-6">
              <button 
                onClick={() => setActiveTab("quality")}
                className={`bg-white text-black p-3 text-xl font-bold rounded-lg w-40 cursor-pointer transition-transform duration-200 ${
                  activeTab === "quality" ? "scale-105 shadow-[0_0_30px_rgba(56,189,248,0.8)]" : "opacity-80 hover:opacity-100"
                }`} > File Quality
              </button>

              <button 
                onClick={() => setActiveTab("security")}
                className={`bg-white text-black p-3 text-xl font-bold rounded-lg w-40 cursor-pointer transition-transform duration-200 ${
                  activeTab === "security" ? "scale-105 shadow-[0_0_30px_rgba(56,189,248,0.8)]" : "opacity-80 hover:opacity-100"
                }`} > Security
              </button>

              <button 
                onClick={() => setActiveTab("fast")}
                className={`bg-white text-black p-3 text-xl font-bold rounded-lg w-40 cursor-pointer transition-transform duration-200 ${
                  activeTab === "fast" ? "scale-105 shadow-[0_0_30px_rgba(56,189,248,0.8)]" : "opacity-80 hover:opacity-100"
                }`} > Fast Service
              </button>
            </div>

            <div className="w-full max-w-4xl min-h-[#420px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {activeTab === "quality" && ( 
                    <motion.div 
                        key="quality" initial= {{ opacity: 0, y: 15}}
                        animate = {{ opacity: 1, y: 0}} exit={{ opacity: 0, y:-15 }}
                        transition={{ duration: 0.25 }} className="w-full flex flex-col items-center">
                        {/* Deskripsi */}
                        <p className="text-xl font-bold mb-3">Even after conversion, your file quality stays as crisp as the original</p>
                        <div className="relative w-full max-w-2xl h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-slate-600 select-none">
                            <img 
                                src="/after_photo.png" 
                                alt="After Converted" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div 
                                className="absolute inset-0 overflow-hidden border-r-2 border-white" 
                                style={{ width: `${slider}%` }}>
                                <img 
                                src="/before_photo.jpeg" 
                                alt="Before Converted" 
                                className="absolute top-0 left-0 w-[672px] max-w-none h-[360px] object-cover"
                                />
                            </div>

                            <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md pointer-events-none z-10">
                                Before Converted
                            </span>
                            <span className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md pointer-events-none z-10">
                                After Converted
                            </span>

                            <div 
                                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 pointer-events-none" 
                                style={{ left: `${slider}%` }}>
                                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg font-bold text-md">
                                ↔
                                </div>
                            </div>

                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                value={slider} 
                                onChange={(e) => setSlider(e.target.value)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                            />
                        </div>
                    </motion.div>
                )}
                {activeTab === "security" && (
                    <motion.div key = "security" initial= {{ opacity: 0, y: 15}}
                        animate = {{ opacity: 1, y: 0}} exit={{ opacity: 0, y:-15 }}
                        transition={{ duration: 0.25 }} className="w-full bg-[#444] border-2 border-slate-300 rounded-2xl p-10 text-center shadow-2xl flex flex-col items-center justify-center min-h-[#360px]">
                        <h2 className="text-2xl font-bold mb-2">Your File Safe and Private</h2>
                        <p className="text-slate-100 text-lg max-w-xl leading-relaxed mb-6">
                            We prioritize your privacy above all else. Your data is encrypted and our only focus is helping you convert your files with ease.
                        </p>
                      
                        <h3 className="text-xl font-bold text-blue-300">Behind the system</h3>
                        <div className="flex flex-row items-center justify-between gap-2 mt-8 w-full max-w-3xl mx-auto px-2">
                            <button onClick={() => setActivestep("input")} 
                                className={`bg-transparent backdrop-blur-md text-white font-semibold w-28 sm:w-32 h-11 rounded-xl flex items-center justify-center text-xs sm:text-sm border-2 border-blue-300/80 shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0 cursor-pointer transition-all duration-200 
                                ${activestep === "input" ? "border-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.7)] scale-105" : 
                                "border-blue-300/40 opacity-70 hover:opacity-100 hover:scale-105" }`} >Input file
                            </button>

                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 640" 
                                className="w-5 h-5 sm:w-6 sm:h-6 fill-white drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] shrink-0">
                                <path d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/>
                            </svg>

                            <button onClick={() => setActivestep("encrypt")} 
                                className={`bg-transparent backdrop-blur-md text-white font-semibold w-28 sm:w-32 h-11 rounded-xl flex items-center justify-center text-xs sm:text-sm border-2 border-blue-300/80 shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0 cursor-pointer transition-all duration-200 
                                ${activestep === "encrypt" ? "border-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.7)] scale-105" : 
                                "border-blue-300/40 opacity-70 hover:opacity-100 hover:scale-105" }`} >Encrypt
                            </button>

                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 640" 
                                className="w-5 h-5 sm:w-6 sm:h-6 fill-white drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] shrink-0">
                                <path d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/>
                            </svg>

                            <button onClick={() => setActivestep("convert")} 
                                className={`bg-transparent backdrop-blur-md text-white font-semibold w-28 sm:w-32 h-11 rounded-xl flex items-center justify-center text-xs sm:text-sm border-2 border-blue-300/80 shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0 cursor-pointer transition-all duration-200 
                                ${activestep === "convert" ? "border-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.7)] scale-105" : 
                                "border-blue-300/40 opacity-70 hover:opacity-100 hover:scale-105" }`} >Convert
                            </button>

                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 640" 
                                className="w-5 h-5 sm:w-6 sm:h-6 fill-white drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] shrink-0">
                                <path d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"/>
                            </svg>

                            <button onClick={() => setActivestep("delete")} 
                                className={`bg-transparent backdrop-blur-md text-white font-semibold w-28 sm:w-32 h-11 rounded-xl flex items-center justify-center text-xs sm:text-sm border-2 border-blue-300/80 shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0 cursor-pointer transition-all duration-200 
                                ${activestep === "delete" ? "border-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.7)] scale-105" : 
                                "border-blue-300/40 opacity-70 hover:opacity-100 hover:scale-105" }`} >Auto Delete
                            </button>
                        </div>
                        <div className="mt-6 min-h-[50px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activestep} initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-white text-sm sm:text-base font-medium text-center bg-transparent backdrop-blur-sm px-6 py-2.5 rounded-xl border-2 border-blue-200/60">
                                
                                {step_desc[activestep]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
                {activeTab === "fast" && (
                    <motion.div key = "fast" initial= {{ opacity: 0, y: 15}}
                          animate = {{ opacity: 1, y: 0}} exit={{ opacity: 0, y:-15 }}
                          transition={{ duration: 0.25 }} className="w-full bg-[#444] border-2 border-slate-300 rounded-lg p-8 sm:p-10 text-center shadow-2xl flex flex-col items-center justify-center min-h-[360px]">
                      <h2 className="font-bold text-2xl">Our Service is Incredibly Fast</h2>
                      <p className="text-lg">it take only 12 second to convert your file format into your target format</p>
                      
                      {/* Container Video Utama */}
                      <div className="bg-[#1a1a1a] w-full max-w-2xl rounded-2xl mt-5 border-[3px] border-white overflow-hidden shadow-xl aspect-video flex items-center justify-center">
                        <video autoPlay loop muted playsInline className="w-full h-full object-contain">
                          <source src="/Fast_testing.webm" type="video/webm"/> 
                          <source src="/Fast_testing.mp4" type="video/webm"/> 

                          Browser tidak memumpuni untuk memutar video
                        </video>
                      </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>  
          </div>
        </section>
      </main>
    </div>
  );
}