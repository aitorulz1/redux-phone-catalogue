import React from 'react';

const PhoneDetail = ({phone}) => {

    const {name, manufacturer, description, color, price, imageFileName, screen, processor, ram} = phone
    return ( 
        <div className="data-container">
            
            <div className="data-title-container">
                {name}
            </div>

            <div className="">

                <div className="">
                    <img src={`/phones/${imageFileName}`} />
                </div>

                <div className="">

                </div>

            </div>
            
        </div> // Fin de data-containier
        
     );
}
 
export default PhoneDetail;