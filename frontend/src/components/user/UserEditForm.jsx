import React, { useState } from 'react'

import { updateUser } from '../services/api'

export default props => {
    const [name, setName] = useState(props.name)
    const [email, setEmail] = useState(props.email)
    const [password, setPassword] = useState(props.password)
    const [cpf, setCpf] = useState(props.cpf)
    const [birthdate, setBirthDate] = useState(props.birthdate)

    return (
        <div className='UserForm'>
            <span><b>Alteração de Dados</b></span>
            <form onSubmit={updateUser(name, email, password, cpf, birthdate, props.id)}>
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