import React from "react";

import './Navbar.css'

export default props => {
    return (
        <div className="Navbar">
            <a href='/new' className="LinkLeft">Novo usuário</a>
            <a href='/' className="LinkCenter"><h1>CRUD Usuários</h1></a>
        </div>
    )
}

