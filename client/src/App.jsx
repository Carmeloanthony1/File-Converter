import { useState, useRef} from "react";
import './App.css';
import './index.css'; 
import Signup_Popup from './components/Signup_Popup';
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Signup from './Signup';
import Login from './Login';
import About from './About';
import Help from './Help';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Home() {
  const [selected_file, setSelected_file] = useState(null);
  const [realFORMAT, setRealFORMAT] = useState("");
  const [targetFORMAT, setTargetFORMAT] = useState("");
   
  const [is_converting, setIs_converting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [is_sign_open, setIs_sign_open] = useState(false);
  const [filesize, setFilesize] = useState(0);
  const [download_URL, setDownload_URL] = useState("");
  const [download_filename, setDownload_filename] = useState(""); 
  const fileInputRef = useRef(null);

  const opsiformat = {
    image: ["PDF", "PNG", "JPG", "WEBP"],
    document: ["PDF", "TXT", "DOCX"],
    default : ["-"]
  };

  const FILE_OPTION = (format) => {

    const current_format = format || realFORMAT;
    if(!current_format) return opsiformat.default;

    const file_type = current_format.toLowerCase();
    if(["png", "jpg", "jpeg", "webp", "gif"].includes(file_type)) return opsiformat.image;
    else if(["doc", "docx", "txt", "pdf"].includes(file_type)) return opsiformat.document;
    return opsiformat.default;
  };

  const button_convert_click = () => {
    fileInputRef.current.click(); //ketika di klik, event nya adalah menghubungkan ref ke button
  }
  const namafile_afterconvert = () => {
    if(!selected_file) return "";
    const namefile = selected_file.name.substring(0, selected_file.name.lastIndexOf("."));
    return `${namefile}.${targetFORMAT.toLocaleLowerCase()}`;
  }
  const handleFILE = (event) => {
    const file = event.target.files[0];
    if(file){
      const filesize = (file.size / (1024 * 1024)).toFixed(1);
      if(parseFloat(filesize) > 100){
        setFilesize(filesize);
        setIs_sign_open(true);
        return;
      }

      setSelected_file(file);
      const file_type = file.name.split('.').pop().toUpperCase();
      setRealFORMAT(file_type);
      
      const avaible = FILE_OPTION(file_type);
      setTargetFORMAT(avaible[0]);
    }
  };

  const Filechange = (event) => {
    const file = event.target.files[0];
    if(file){
      setSelected_file(file);
      console.log(`File yang di pilih adalah`, file.name);
    }
  };

  const handleCONVERT = async () => {
    if(!selected_file){
      alert("Silahkan memilih file untuk di convert!");
      return;
    }

    if(!targetFORMAT || targetFORMAT === "-"){
      alert("Format tujuan tidak valid");
      return;
    }

    setDownload_URL("");
    setDownload_filename("");
    const formData = new FormData(); //untuk menyimpan file yang akan di upload
    formData.append("file", selected_file); //kirim info ke backend
    formData.append("targetFORMAT", targetFORMAT); 

    try {
      setIs_converting(true);
      setProgress(10);
      setStatus("Mengunggah & Mengonversi file...");
      const token = localStorage.getItem("access_token");

      const response = await axios.post("/api/convert", formData, {
        headers: { 
          "authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (progressEvent) => {
          if(progressEvent.total){
            const percent = Math.round((progressEvent.loaded * 80) / progressEvent.total);
            setProgress(percent);
          }
        }
      });

      const data = response.data;
      setProgress(50);
      setStatus("Mendownload hasil konversi...");

      const fileresponse = await fetch(data.downloadURL);
      if(!fileresponse.ok){
        throw new Error("Gagal mengambil file hasil konversi dari server.");
      }

      const blob = await fileresponse.blob();
      const blob_url = window.URL.createObjectURL(blob);

      setDownload_URL(blob_url);
      setDownload_filename(data.download_filename || namafile_afterconvert());

      setProgress(100);
      setStatus("Proses convert selesai, silahkan click tombol download");

    } catch(error){
      console.error("Terjadi error saat melakukan convert: ", error);
      
      const errData = error.response?.data;
      let errorMessage = "Terjadi kesalahan pada server";

      if(typeof errData === "string"){
        errorMessage = errData;
      } else if (errData && typeof errData === "object"){
        errorMessage = errData.error || errData.message || JSON.stringify(errData);
      } else if (error.message){
        errorMessage = error.message;
      }

      alert(errorMessage);
      setIs_converting(false);
      setProgress(0);
      setStatus("");
    }
  };

  const handleMANUAL_DOWNLOAD = () => {
    if(!download_URL) return;
    
    const link = document.createElement('a');
    link.href = download_URL;
    link.download = download_filename;
    link.click();
  }
  
  return (
    <div className= "min-h-screen bg-[#333] text-white">

      <div className = "w-full max-w-6xl mx-auto px-4 flex flex-col items-center overflow-x-hidden">
        <h1 className = "mt-12 text-4xl font-bold">Convert Your File</h1>
        <h3 className = "mt-4 text-xl tracking-wide text-center">MENGUBAH TIPE FILE MU DENGAN{" "}   
           <a className = "underline decoration-red-300 decoration-2">MUDAH!</a>
        </h3>

        <div className = "mt-8 w-full max-w-lg min-h-[360px] py-8 px-4 md: bg-[#444] p-2 border-3 rounded-lg flex flex-col justify-center items-center gap-6 shadow-lg">
          <input type = "file" ref = {fileInputRef} onChange={handleFILE} className="hidden"/>
          <button 
            className = "bg-[#808080] p-2 font-bold rounded-lg w-64 h-16 flex flex-row items-center justify-center gap-2 cursor-pointer"
            onClick={button_convert_click}  
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className = "w-8 h-8 fill-white">
              <path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z"/>
            </svg>
            <h2 className = "text-xl">Pilih file</h2>
          </button>
          <div className="flex flex-row gap-10 justify-center items-center">
            <div className="bg-[#808080] p-2 rounded-lg w-22 h-12 flex justify-center items-center">
              {realFORMAT ? realFORMAT : "-"}
            </div>
            <svg className= "w-8 h-8"xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><title xmlns="">arrow</title><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
            <select value = {targetFORMAT} onChange={(e) => setTargetFORMAT(e.target.value)}
              className="bg-[#808080] p-2 rounded-lg w-22 h-12 flex text-center justify-center items-center cursor-pointer">{FILE_OPTION(realFORMAT).map((format, index) => (
                <option key = {index} value = {format} className="text-white font-normal flex text-center cursor-pointer">{format}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 w-full px-4">
            <p className="text-slate-200 font-medium text-right">{ selected_file ? selected_file.name : " "}</p>
            <svg className= "w-3 h-3 text-slate-300 shrink-0"xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><title xmlns="">arrow</title><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
            <p className="text-slate-200 font-medium text-left">{namafile_afterconvert()}</p>
          </div>
              {is_converting ? (
                <div className="w-full px-8 flex flex-col items-center gap-2">
                  <div className="w-full bg-[#333] h-4 rounded-full overflow-hidden border border-slate-500">
                    <div className="bg-emerald-600 h-full transition-all duration-300 ease-out" style={{ width:`${progress}%`}}></div>
                  </div>
                  <div className="flex justify-between w-full text-sm text-slate-300 font-medium px-1">
                    <span>{status}</span>
                    <span>{progress}</span>
                  </div>
                  {download_URL && (
                    <div className="flex flex-row gap-3 mt-2">
                      <button onClick={handleMANUAL_DOWNLOAD} 
                        className="mt-2 bg-emerald-600 hover:bg-emerald-500 px-6 py-2.5 rounded-lg font-bold text-white flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-md">Download File
                      </button>
                    </div>
                  )}
                </div>
              ) : ( 
                <button onClick={handleCONVERT} className="bg-[#808080] w-30 h-12 rounded-lg font-bold cursor-pointer hover:bg-slate-600 transition-all active:scale-95">
                  Convert
                </button>
              )}
        </div>
      </div>
      <Signup_Popup isOpen = {is_sign_open} onClose = {() => setIs_sign_open(false)} filesize = {filesize}/>
    </div>
  );
}

export default function App(){
  return(
      <div className="min-h-screen bg-[#333] text-slate-100 flex flex-col justify-between overflow-x-hidden">
        {/*Tambah overflow-x-hidden biar lebih aman*/}
        <Navbar/>
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/convert" element ={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/help" element={<Help/>}/>
          </Routes>
        </div>

        <Footer/>
      </div>
  );
}