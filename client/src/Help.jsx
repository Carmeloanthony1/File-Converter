import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Help(){
    const Dev_email = "meloproacc@gmail.com";
    
    const [formdata, setFormdata] = useState({
        name: "", user_email: "", category: "Technical error", message: "",
    });

    const [lastoken, setLasttoken] = useState(null);

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
      <main className="w-full flex-1 flex justify-center items-center p-6">
        <div className="w-full max-w-2xl bg-[#444] border-2 border-slate-300 rounded 2xl p-8 text-center">
            <h2 className="text-2xl font-bold">Help Desk</h2>
            <p>Submit your issue to dev</p>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label className="text-xs font-bold mb-1 block">Name</label>
                        <input 
                            type="text" required placeholder="Your name" value={formdata.name} 
                            onChange={(e) =>  setFormdata({ ...formdata, name: e.target.value})}
                            className="w-full bg-[#333] border-none border-slate-400 rounded-lg p-3 text-sm:outline-none border-none"/>
                    </div>
                    <div className="flex-1">
                        <label className="text-xs font-bold mb-1 block">email</label>
                        <input 
                            type="text" required placeholder="Your name" value={formdata.email} 
                            onChange={(e) =>  setFormdata({ ...formdata, user_email: e.target.value})}
                            className="w-full bg-[#333] border-none border-slate-400 rounded-lg p-3 text-sm:outline-none border-none"/>
                    </div>
                    <div className="flex-1">
                        <label className="text-xs font-bold mb-1 block">Problem Category</label>
                        <select 
                            value = {formdata.category} onChange={(e) => setFormdata({ ...formdata, category: e.target.value})}
                            className="w-full bg-[#333] border border-slate-400 rounded-lg p-3 text-sm focus: outline-none">
                            <option value = "Conversion error">Conversion Error</option>
                            <option value = "Slow speed">Slow speed</option>
                            <option value = "Quality loss">Quality loss</option>
                            <option value = "Bug/Suggestion">Bug/Suggestion</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
      </main>

    </div>
    );
}