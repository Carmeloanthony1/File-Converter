import { useState, useRef } from "react";
import './App.css';
import './index.css'; 

function App() {
  const [selected_file, setSelected_file] = useState(null);
  const fileInputRef = useRef(null);
  
  const button_convert_click = () => {
    fileInputRef.current.click();
  }

  const Filechange = (event) => {
    const file = event.target.files[0];
    if(file){
      setSelected_file(file);
      console.log(`File yang di pilih adalah`, file.name);
    }
  };

  
  return (
    <div className= "min-h-screen bg-[#333] text-slate-100 flex flex-col items-center">
      <nav className="w-full bg-[#808080] h-15 flex items-center p-5 justify-between">
        <h1 className="text-xl font-bold">File Converter</h1>
        <div className="flex items-center gap-12 font-bold">
          <h1 className="text-xl font-bold">About</h1>
          <h1 className="text-xl font-bold">Convert</h1>
          <h1 className="text-xl font-bold">Help</h1>
        </div>
      </nav>

      <div className = "min-h-screen w-6xl bg-[#333] flex flex-col items-center ">
        <h1 className = "mt-12 text-4xl font-bold">Convert Your File</h1>
        <h3 className = "mt-4 text-xl tracking-wide">MENGUBAH TIPE FILE MU DENGAN{" "}   
           <a className = "underline decoration-red-300 decoration-2">MUDAH!</a>
        </h3>

        <div className = "mt-12 w-xl h-64 bg-[#444] p-2 border-3 rounded-lg flex flex-col justify-center items-center">
          <input type = "file" ref = {fileInputRef} onChange={Filechange} className="hidden"/>
          <button 
            className = "bg-[#808080] p-2 font-bold rounded-lg w-64 h-16 flex flex-row items-center justify-center gap-2 cursor-pointer"
            onClick={button_convert_click}  
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className = "w-8 h-8 fill-white">
              <path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z"/>
            </svg>
            <h2 className = "text-xl">Pilih file</h2>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;