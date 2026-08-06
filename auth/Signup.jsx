import { useState } from 'react';

export default function Signup(){
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
}