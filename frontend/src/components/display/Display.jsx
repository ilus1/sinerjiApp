import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NewUserForm from './NewUserForm'
import UserEditForm from './UserEditForm'
import UserList from '../user/UserList'
import './Display.css'

export default props => {
    return (
        <div className='Display'>
            <Switch>
                <Route exact path='/'>
                    <UserList/>
                </Route>
                <Route path='/new'>
                    <NewUserForm/>
                </Route>
                <Route path='/edit/{id}'>
                    <UserEditForm/>
                </Route>
            </Switch>
        </div>
    )
}