import react from 'react';
export default function Login_Popup({ isOpen, onClose, filesize }) {
    if(!isOpen){
        return null;
    }

    const handlelogin = () => {
        window.location.href = '/login';
    };

    return (
        <div className="min-h-120 w-xl bg-[#333]">pipel dingger</div>
    )
}