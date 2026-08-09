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
        <div className="min-h-screen bg-[#333] text-slate-100 flex flex-col">
            <nav className="w-full bg-[#808080] h-15 flex items-center p-5 justify-between">
                <h1 className="text-xl font-bold">File Converter</h1>
                <div className="flex items-center gap-12 font-bold">
                    <Link to="/about" className="text-xl font-bold">About</Link>
                    <Link to="/" className="text-xl font-bold">Convert</Link>
                    <Link to="/help" className="text-xl font-bold">Help</Link>
                </div>
            </nav>
            <main className="w-full max-w-5xl px-8 my-auto flex-1 py-12 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-12 flex flex-col text-left">
                        <h1 className="text-6xl mt-6 mb-3 font-bold">
                            What is <span className="text-blue-300">File Converter</span> ?
                        </h1>
                        <p className="text-3xl leading-relaxed flex flex-wrap items-baseline gap-x-2">
                            <span>An easy to use web application that allows you to </span>
                            <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-[1.3em] align-bottom">
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
                            <motion.span layout transition={{ duration: 0.3, ease: "easeInOut"}}>your file effortlessly</motion.span>
                            <br />
                            
                        </p>
                        <span className="text-blue-300 font-bold text-2xl leading-relaxed">Design for speed and simplicity.</span>
                    </div>
                    <div className="md:col-span-5 flex flex-col gap-4">
                        <div w-12 h-20></div>
                    </div>
                </div>
            </main>
        </div>
    );
}