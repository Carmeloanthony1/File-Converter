import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
    const navigate = useNavigate();
    const [forminput, setForminput] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const [loading, setLoading] = useState(false);
    const [errormessage, setErrormessage] = useState("");

    const handle_Input = (e) => { //menghandle, input dari user, setiap ketikannya akan di simpan di dalam state
        setForminput({
            ...forminput, [e.target.name] : e.target.value
        });
    };

    const handle_Submit = async (e) => {
        e.preventDefault();
        setErrormessage('');

        if(forminput.password !== forminput.confirm_password){
            setErrormessage('Password tidak cocok, silahkan mengisi password yang sama');
            return;
        }
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3000/api/auth/signup', {
                method : 'POST',
                headers : { 'Content-Type': 'application/json'},
                body : JSON.stringify({
                    username: forminput.username,
                    email: forminput.email,
                    password: forminput.password
                })
            });

            const data = await response.json();
            if(response.ok){
                alert("Sign up berhasil");
                if(data.token){
                    localStorage.setItem('access_token', data.token);
                    window.location.href = '/';
                } else {
                    window.location.href = '/login';
                }
            } else {
                setErrormessage(data.message || "Gagal melakukan sign up");
            }
        } catch (error){
            console.error('Error dalam melakukan sign up', error);
            setErrormessage('terjadi sebuah kesalahan server'); 
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen bg-[#333] text-white flex items-center justify-center p-4">
            <div className="bg-[#444]/90 backdrop-blur-md border-2 border-white/90 h-140 w-lg rounded-lg flex flex-col justify-center gap-4 p-5">
                <h1 className="text-3xl font-bold flex flex-start justify-center">Sign up</h1>
                {errormessage && (
                    <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg text-sm text-center">
                        {errormessage}
                    </div>
                )}
                <form onSubmit={handle_Submit} className="flex flex-col gap-4 justify-center items-center">
                    <input 
                        type = "text" name = "username" placeholder="Masukan username anda..." value = {forminput.username}
                        onChange={handle_Input} className="p-3 w-80 bg-[#F0EFE7]/30 rounded-lg border-white border-2 text-white text-lg">
                    </input>
                    <input 
                        type = "email" name = "email" placeholder="Masukan email anda..." value = {forminput.email}
                        onChange={handle_Input} className="p-3 w-80 bg-[#F0EFE7]/30 rounded-lg border-white border-2 text-white text-lg">
                    </input>
                    <input 
                        type = "password" name = "password" placeholder="Masukan password anda..." value = {forminput.password}
                        onChange={handle_Input} className="p-3 w-80 bg-[#F0EFE7]/30 rounded-lg border-white border-2 text-white text-lg">
                    </input>
                    <input 
                        type = "password" name = "confirm_password" placeholder="Masukan password anda kembali" value = {forminput.confirm_password}
                        onChange={handle_Input} className="p-3 w-80 bg-[#F0EFE7]/30 rounded-lg border-white border-2 text-white text-lg">
                    </input>
                    <button type = "submit" disabled = {loading} className= "mt-4 p-3 w-30 rounded-lg border-white-400 border-2 bg-[#808080]">{loading ? 'Mohon menunggu' : 'SIGN UP'}</button>
                    <p className='text-md'>sudah punya akun? <a href = "/login" className="text-white cursor-pointer hover:text-blue-400">login</a></p>
                </form>
            </div>
        </div>
    )
}