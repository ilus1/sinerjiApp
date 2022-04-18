import React from 'react'

import { BsTrash } from 'react-icons/bs'
import { HiOutlinePencil } from 'react-icons/hi'

export default props => {
    return props.users.map(element => {
        return (
            <tr>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.birthdate.slice(0, 10)}</td>
                <td>
                    <button className='Buttons'>
                        <HiOutlinePencil />
                    </button>
                        <BsTrash className='Icons'/></td>
            </tr>
        );
    });
}