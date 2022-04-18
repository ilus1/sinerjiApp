import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/" style={{paddingTop: "20px"}}>Lista de usuários</Link>
                </li>
                <hr/>
                <li>
                    <Link to="/new">Novo usuário</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu