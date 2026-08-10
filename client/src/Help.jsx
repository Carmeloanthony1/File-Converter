import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Help(){
    const Dev_email = "meloproacc@gmail.com";
    
    const [formdata, setFormdata] = useState({
        name: "", user_email: "", category: "Conversion error", message: "",
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

      {/* Main Content */}
      <main className="w-full mt-[60px] flex-1 flex justify-center items-center p-6 sm:p-10">
        <div className="w-full max-w-4xl bg-[#444] border-2 border-slate-300 rounded-2xl p-10 text-center shadow-2xl my-auto">
            <h2 className="text-3xl font-bold mb-2">Help Desk</h2>
            <p className="mb-8 text-slate-300 text-lg">Submit your issue to dev</p>

            {/* Form Grid 2 Kolom */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                
                {/* KOLOM KIRI */}
                <div className="flex flex-col gap-6">
                    <div>
                        <label className="text-base font-bold mb-2 block text-slate-200">Name</label>
                        <input 
                            type="text" required placeholder="Your name" value={formdata.name} 
                            onChange={(e) => setFormdata({ ...formdata, name: e.target.value})}
                            className="w-full bg-[#333] border border-slate-400 rounded-xl p-4 text-base focus:outline-none focus:border-slate-200"/>
                    </div>

                    <div>
                        <label className="text-base font-bold mb-2 block text-slate-200">Email</label>
                        <input 
                            type="text" required placeholder="Your email" value={formdata.user_email} 
                            onChange={(e) => setFormdata({ ...formdata, user_email: e.target.value})}
                            className="w-full bg-[#333] border border-slate-400 rounded-xl p-4 text-base focus:outline-none focus:border-slate-200"/>
                    </div>

                    <div>
                        <label className="text-base font-bold mb-2 block text-slate-200">Problem Category</label>
                        <select 
                            value={formdata.category} onChange={(e) => setFormdata({ ...formdata, category: e.target.value})}
                            className="w-full bg-[#333] border border-slate-400 rounded-xl p-4 text-base focus:outline-none focus:border-slate-200 cursor-pointer">
                            <option value="Conversion error">Conversion Error</option>
                            <option value="Slow speed">Slow speed</option>
                            <option value="Quality loss">Quality loss</option>
                            <option value="Bug/Suggestion">Bug/Suggestion</option>
                        </select>
                    </div>
                </div>

                {/* KOLOM KANAN */}
                <div className="flex flex-col">
                    <label className="text-base font-bold mb-2 block text-slate-200">Description</label>
                    <textarea 
                        required placeholder="Tuliskan kendala yang anda alami"
                        value={formdata.message} onChange={(e) => setFormdata({ ...formdata, message: e.target.value})} 
                        className="w-full h-full min-h-[260px] bg-[#333] border border-slate-400 rounded-xl p-4 text-base focus:outline-none focus:border-slate-200 resize-none">
                    </textarea>
                </div>
            </form>
            <div className="flex justify-center mt-10">
                <button className="w-40 h-15 bg-[#333] rounded-xl border border-slate-400 text-base focus:outline-none focus:border-slate-200 resize-none hover:scale-105 cursor-pointer ">Send</button>
            </div>
        </div>
      </main>

    </div>
    );
}