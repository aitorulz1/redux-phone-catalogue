import React, { Fragment, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { obtenerListadoPhones } from '../actions/phonesActions';



// Actions Redux


const Phones = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        // Consultar la api
        const cargarPhones = () => dispatch(obtenerListadoPhones() );
        cargarPhones();
    }, []);



    return ( 
        <Fragment>
            <div className="boron-load">
                
            </div>
        </Fragment>
     );
}
 
export default Phones;