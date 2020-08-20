import React from 'react';
import { Link } from 'react-router-dom'

const Phone = ({phone}) => {

    const { name, id } = phone;

    function order (id, phone) {
        const ordered = phone.sort((a, b) => a.id > b.id ? 1 : -1)
    }

    return ( 
        <div>
            <Link to={`/${id}`}>{name}</Link>
        </div>     
    );
}
 
export default Phone;