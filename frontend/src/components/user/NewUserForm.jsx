import React, { useState } from 'react'

import { newUser } from '../services/api'


export default props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [birthdate, setBirthDate] = useState('')

    return (
        <div className='UserForm'>
            <span><b>Novo Usuário</b></span>
            <form onSubmit={newUser(name, email, password, cpf, birthdate)}>
                <label>Nome
                    <input
                        type='text'
                        placeholder='Nome do usuário'
                        onChange={e => setName(e.target.value)}/>
                </label>
                <label>Email:
                    <input
                        type='text'
                        placeholder='Email do usuário'
                        onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>Senha:
                    <input
                        type='text'
                        placeholder='Senha do usuário'
                        onChange={e => setPassword(e.target.value)}/>
                </label>
                <label>Cpf:
                    <input
                        type='text'
                        placeholder='Cpf do usuário'
                        onChange={e => setCpf(e.target.value)}/>
                </label>
                <label>Data de Nascimento
                    <input
                        type='Date'
                        onChange={e => setBirthDate(e.target.value)}/>
                </label>
                <button type='submit'>Criar</button>
            </form>
        </div>
    )
}