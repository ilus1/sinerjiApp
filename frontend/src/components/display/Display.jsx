import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NewUserForm from '../user/NewUserForm'
import UserEditForm from '../user/UserEditForm'
import UserList from '../user/UserList'
import './Display.css'

export default props => {
    return (
        <div className='Display'>
            <Routes>
                <Route exact path='/' element={<UserList/>} />
                <Route path='/new' element={<NewUserForm/>} />
                <Route path='/edit/{id}' element={<UserEditForm/>} />
            </Routes>
        </div>
    )
}