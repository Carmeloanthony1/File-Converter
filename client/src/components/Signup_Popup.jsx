import react from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup_Popup({ isOpen, onClose, filesize }) {
    const navigate = useNavigate();

    if(!isOpen){
        return null;
    }

    const handlesign = () => {
        navigate('/signup');
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm animate-fade-in transition-all">
            <div className='relative p-8 flex flex-col w-md min-h-120 items-center justify-center bg-[#333]/100 rounded-xl border-4 border-white-50 transition-all transform scale-100 hover:scale-[1.03]'>
                <button onClick = {onClose} className="absolute top-4 right-4 p-1 cursor-pointer">
                    <svg className = "w-7 h-7 fill-white hover:fill-white/70"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"/></svg>
                </button>
                <h3 className='font-bold text-lg'>File anda saat ini berukuran <span className='font-bold text-blue-300'>{filesize} MB</span></h3>
                <h1 className='text-lg my-3 font-bold px-9'>Ingin convert file yang lebih besar?</h1>
                <h2 className='text-xl font-bold px-9'>signup untuk melanjutkan</h2>
                <button onClick={handlesign} 
                    className = "h-12 my-10 w-25 font-bold rounded-lg border-2 cursor-pointer bg-[#808080] hover:bg-slate-700 transition-colors transition-in-out active:scale-95">SIGN UP 
                </button>
            </div>
        </div>
    )
}