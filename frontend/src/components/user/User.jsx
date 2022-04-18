import React from 'react';
import { useNavigate } from "react-router-dom";
import { BsTrash } from 'react-icons/bs';
import { HiOutlinePencil } from 'react-icons/hi';
import { deleteUser } from '../services/api';


export default (props) => {
    const navigate = useNavigate();

    return props.users.map(element => {
        return (
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.birthdate.slice(0, 10)}</td>
                <td>
                    <button className='Buttons' onClick={e => {
                        e.preventDefault();
                        navigate(`/edit/${element.id}`)}}>
                        <HiOutlinePencil />
                    </button>
                    <button className='Buttons' onClick={e => {
                        e.preventDefault();
                        deleteUser(element.id);
                        window.location.reload(false);}}>
                        <BsTrash className='Icons'/>
                    </button>
                </td>
            </tr>
        );
    });
}