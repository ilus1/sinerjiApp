import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { getList } from '../services/api'
import User from './User'
const BASE_URL = 'http://localhost:8080'


export default props => {
    const [users, setUsers] = useState([]);
    useEffect(function() {
        axios.get(`${BASE_URL}/users`)
        .then(resp => setUsers(resp.data))
    }, []);


    console.log(users)

    return (
        <table className='ContentTable'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>email</th>
                    <th>Data de Nascimento</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? <User users={users}/>: null
                }
            </tbody>
        </table>
    )
}