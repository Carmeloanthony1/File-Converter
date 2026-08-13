import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-[#333] text-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold tracking-wide text-white"> File 
                    <span className="text-blue-300">Converter</span>
                </Link>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none">
                    <svg className = "w-6 h-6" fill = "currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
                    </svg>
                </button>
                {/* Buat desktop navbarnya*/}
                <div className="hidden md:flex items-center text-white space-x-6 font-medium text-sm">
                    <Link to="/" className='hover:text-blue-300 transition'>About</Link>
                    <Link to="/convert" className='hover:text-blue-300 transition'>Convert</Link>
                    <Link to="/help" className='hover:text-blue-300 transition'>Help</Link>
                </div>
            </div>
            {isOpen && ( //biar nanti pas di pencet menunya, dia ga nutupin
                <div className="md:hidden bg-[#808080] px-4 pt-2 pb-4 space-y-2">
                    <Link to = "/" 
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-white hover:text-blue-300 font-medium"
                    >About</Link>
                    <Link to = "/convert" 
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-white hover:text-blue-300 font-medium"
                    >Convert</Link>
                    <Link to = "/help" 
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-white hover:text-blue-300 font-medium"
                    >Help</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;