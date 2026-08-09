import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Change", "Manage", "Convert"];

export default function About() {
  const [index, setIndex] = useState(0);

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

            {/* Video */}
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

        <section className="w-full min-h-[calc(100vh-60px)] flex flex-col items-center justify-center px-10 py-24 border-t border-slate-700/50">
          <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-8 mx-auto">
            <h1 className="text-white font-bold text-4xl lg:text-3xl text-center">
              Why Choose Our File Converter?
            </h1>
            <div>
                <button className=""><span>File Quality</span></button>
                <button className=""><span>Security</span></button>
                <button className=""><span>Fast Service</span></button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}