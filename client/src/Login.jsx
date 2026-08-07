import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    const [forminput, setForminput] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [errormessage, setErrormessage] = useState("");

    const handle_input = (e) => {
        setForminput({
            ...forminput, [e.target.name]: e.target.value
        });
    };

    const handle_submit = async (e) => {
        e.preventDefault();
        setErrormessage('');
        setLoading(true);
        try{
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({
                    email:  forminput.email,
                    password: forminput.password
                })
            });

            const data = await response.json();
            if(response.ok){
                alert("Login sukses");
                if(data.token){
                    localStorage.setItem('access_token', data.token);
                }
                navigate('/');
            } else {
                setErrormessage(data.message || "Email atau password salah");
            }
        } catch(error) {
            console.error('error saat login', error);
            setErrormessage('Terjadi kesalahan server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#333] text-white flex items-center justify-center p-4">
            <div className="bg-[#444]/90 backdrop-blur-md border-2 border-white/40 h-140 w-lg flex flex-col justify-center gap-4 p-5">
                <h1 className="text-3xl font-bold flex flex-start justify-center">Log in</h1>
                {errormessage && (
                    <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg text-sm text-center">
                        {errormessage}
                    </div>
                )}
                <form onSubmit={handle_submit} className="flex flex-col gap-4 justify-center items-center">
                    <input 
                        type = "email" name = "email" placeholder="Masukan email anda..." value = {forminput.email}
                        onChange={handle_input} className="p-3 w-sm bg-[#F0EFE7]/30 rounded-lg border-white border-2 text-white text-lg">
                    </input>
                    <input 
                        type = "password" name = "password" placeholder="Masukan password anda..." value = {forminput.password}
                        onChange={handle_input} className="p-3 w-sm bg-[#F0EFE7]/30 rounded-lg border-white border-2 text-white text-lg">
                    </input>
                    <button type = "submit" disabled = {loading} className= "mt-4 p-3 w-30 rounded-lg border-white-400 border-2 bg-[#808080]">{loading ? 'Mohon menunggu' : 'SIGN UP'}</button>
                    <p className='font-bold text-md'>belum punya akun? <a href = "/signup" className="text-white cursor-pointer hover:text-blue-400">sign up</a></p>
                </form>
            </div>
        </div>
    );
}