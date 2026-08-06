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
    }
}