import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';
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
                        <RiPencilFill className='EditButton'/>
                    </button>
                    <button className='Buttons' onClick={e => {
                        e.preventDefault();
                        deleteUser(element.id);
                        window.location.reload(false);}}>
                        <FaTrash className='DeleteButton'/>
                    </button>
                </td>
            </tr>
        );
    });
}