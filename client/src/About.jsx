import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="min-h-screen bg-[#333] text-slate-100 flex flex-col items-center">
            <nav className="w-full bg-[#808080] h-15 flex items-center p-5 justify-between">
                <h1 className="text-xl font-bold">File Converter</h1>
                <div className="flex items-center gap-12 font-bold">
                    <Link to = "/about" className="text-xl font-bold">About</Link>
                    <Link to = "/" className="text-xl font-bold">Convert</Link>
                    <Link to = "/help" className="text-xl font-bold">Help</Link>
                </div>
            </nav>
        </div>
    );
}