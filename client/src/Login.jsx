import { useState } from 'react';
import { data, useNavigate } from 'react-router-dom';

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
}