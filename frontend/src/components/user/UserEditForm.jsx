import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../services/api'

const BASE_URL = 'http://localhost:8080'

export default _ => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const userID = useParams()['*'];

    useEffect(function() {
        axios.get(`${BASE_URL}/users/${userID}`)
        .then(resp => setUser(resp.data));
    }, []);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [cpf, setCpf] = useState(user.cpf);
    const [birthdate, setBirthDate] = useState(user.birthdate);

    function submit(e) {
        e.preventDefault();
        updateUser(name, email, password, cpf, birthdate, userID);
        navigate('/');
    }

    useEffect(function() {
        setName(user.name);
        setEmail(user.email);
        setCpf(user.cpf);
    }, [user]);

    return (
        <div className='UserForm'>
            <span className='Title'><b>Alteração de Dados</b></span>
            <form onSubmit={e => submit(e)}>
                <label>Nome
                    <input
                        type='text'
                        placeholder='Nome do usuário'
                        onChange={e => setName(e.target.value)}
                        value={name}/>
                </label>
                <label>Email:
                    <input
                        type='text'
                        placeholder='Email do usuário'
                        onChange={e => setEmail(e.target.value)}
                        value={email}/>
                </label>
                <label>Cpf:
                    <input
                        type='text'
                        placeholder='Cpf do usuário'
                        onChange={e => setCpf(e.target.value)}
                        value={cpf}/>
                </label>
                <label>Data de Nascimento
                    <input
                        type='Date'
                        onChange={e => setBirthDate(e.target.value)}/>
                </label>
                <label>Senha:
                    <input
                        className='SubmitButton'
                        type='password'
                        placeholder='Senha do usuário'
                        onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type='submit'>Salvar</button>
            </form>
        </div>
    )
}