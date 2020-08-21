import React from 'react';

const PhoneDetail = ({phone}) => {
    console.log(phone)

    const {name} = phone
    return ( 
        <div>
            {name}
        </div>
     );
}
 
export default PhoneDetail;