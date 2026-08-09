import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Change", "Manage", "Convert"];

export default function About() {
  const [index, setIndex] = useState(0);
  //state nyimpan tab yang akan di buka
  const [activeTab, setActiveTab] = useState("quality");
  const [slider, setSlider] = useState(50);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#333] text-slate-100 flex flex-col overflow-y-auto">
      {/* Navbar */}
      <nav className="w-full bg-[#808080] h-[60px] flex items-center p-5 justify-between fixed top-0 left-0 z-50">
        <h1 className="text-xl font-bold">File Converter</h1>
        <div className="flex items-center gap-12 font-bold">
          <Link to="/about" className="text-xl font-bold">About</Link>
          <Link to="/" className="text-xl font-bold">Convert</Link>
          <Link to="/help" className="text-xl font-bold">Help</Link>
        </div>
      </nav>

      {/* Main */}
      <main className="w-full mt-[60px] flex flex-col">
        {/* Slide 1 : What is file converter*/}
        <section className="w-full min-h-[calc(100vh-60px)] flex items-center justify-center px-10 py-28 lg:py-32">
          <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-12 gap-10 items-center mx-auto my-auto">
            <div className="md:col-span-7 flex flex-col text-left">
              <h1 className="text-4xl lg:text-5xl mt-2 mb-4 font-bold leading-tight">
                What is <span className="text-blue-300">File Converter?</span>
              </h1>

              <div className="text-2xl lg:text-3xl leading-relaxed flex flex-wrap items-baseline gap-x-2">
                <span>An easy to use web application that allows you to</span>
                <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-[1.3em] w-[3.8em] align-baseline">
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
                <span>your file effortlessly</span>
              </div>

              <p className="text-blue-300 text-lg lg:text-xl font-semibold mt-6 tracking-wide">
                Designed for speed and simplicity.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="bg-[#444] border-3 border-white p-4 rounded-2xl w-full h-[360px] overflow-hidden shadow-2xl flex items-center justify-center">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                  <source src="/demo_video.webm" type="video/webm" /> 
                  Browser tidak mendukung pemutaran video
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2 - Kelebihan, buttton section */}
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
          {/* Slider Container */}
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
          </div>
        </section>
      </main>
    </div>
  );
}