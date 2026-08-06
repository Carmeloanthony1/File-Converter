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
            ...forminput, [e.target.name]: e.target.value;
        });
    };
}