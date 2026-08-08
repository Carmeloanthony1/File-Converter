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
                    <Link to = "/about" className="text-xl font-bold">About</Link>
                    <Link to = "/" className="text-xl font-bold">Convert</Link>
                    <Link to = "/help" className="text-xl font-bold">Help</Link>
                </div>
            </nav>
            <main className="w-full max-w-5xl px-8 my-auto flex-1 py-12 flex flex-col text-left justify-center">
                <h1 className="text-4xl mt-6 mb-3 font-bold">What is <span className="text-blue-300">File Converter</span> ?</h1>
                <span className="text-2xl">An easy to use web application that</span>
                <span className="text-2xl ">allows you to<span> </span>                  
                    <span className="inline-flex h-[40px] overflow-hidden justify-start items-center">
                        <AnimatePresence mode = "wait">
                            <motion.span
                                key={words[index]} initial={{ y: 30, opacity: 0}} animate={{ y: 0, opacity: 1}}
                                exit = {{y : -30, opacity: 0}} transition= {{duration: 0.35, ease: "backOut" }}
                                className = "font-bold text-blue-300 inline-block"> {words[index]}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                <span className="text-2xl"> your file effortlessly.</span>
                </span>
            </main>
        </div>
    );
}