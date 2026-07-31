import { useState  } from "react";
import './App.css';
import './index.css'; 

function App() {
  return (
    <div className= "min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center">
      <nav className="w-full bg-[#808080] h-15 flex items-center p-5 justify-between">
        <h1 className="text-xl font-bold">File Converter</h1>
        <div className="flex items-center gap-12 font-bold">
          <h1 className="text-xl font-bold">About</h1>
          <h1 className="text-xl font-bold">Convert</h1>
          <h1 className="text-xl font-bold">Help</h1>
        </div>
      </nav>
    </div>
  );
}

export default App;