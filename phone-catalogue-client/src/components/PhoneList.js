import React from 'react';
import { Link } from 'react-router-dom';



const PhoneList = ({phone}) => {

    const { name, id } = phone;

    return ( 
        
            <div class="model-container">
                <Link to={``}>{name}</Link>
            </div>
        
    );
}
 
export default PhoneList;