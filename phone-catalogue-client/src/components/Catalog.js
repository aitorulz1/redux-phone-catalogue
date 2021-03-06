import React, { Fragment, useEffect, useState } from 'react';
import PhoneDetail from './PhoneDetail';

import logoMain from '../images/logo-main.png';
import Header from './misc/Header';
import Spinner from './misc/Spinner';

// useSelector es la forma de obtener el state y useDispatch nos permite a través de dispatch, pasar una función a la función que traido de Actions

import { useSelector, useDispatch } from 'react-redux';
import { obtenerListadoPhones } from '../actions/phonesActions';





// Actions Redux

const Phones = () => {

    // Crear estado inicial para obtener el index onClick
    
    const [index, setIndex] = useState(null)

    // Necesario para obtner la función obtenerListadoPhones del Action y que dispatch no sea undefined
    
    const dispatch = useDispatch();

    
    // Antes de que cargue la página...
    
    useEffect(() => {

    // Consultar la api

    const descargarPhones = () => dispatch( obtenerListadoPhones() );
    setTimeout(() => {
    descargarPhones();
    }, 3000);
    }, );


 
    // Obtener el state y traerme al front el array de phones

    const phones = useSelector( state => state.phones.phones );
    
    const onClickShow = (id) => {
        setIndex(id)
    }

    return ( 
        <Fragment>
            
            <div className="sidebar-container">

                    <Header />
                
                <div className="sidebar-list-container">
                    <div className="sidebar-list">
                        
                        { !phones || phones.length === 0 ? <Spinner /> 
                        : 
                        (
                        phones.sort((a, b) => a.id > b.id ? 1 : -1).map((phone) => (    
                        <div key={phone.id} className="select-phone" onClick={() => onClickShow(phone.id)}>{phone.name}</div>
                        )))
                        }
                    </div>
                </div>

            </div>

            <div className="main-container">
                {index !== null ?
            <PhoneDetail                 
             phone={phones[index]}
            /> : <div className="main-container-inicio"><img src={logoMain} alt="PhoneCatalogue" /></div>    
            }
                        
            </div>

        </Fragment>
     );
}


 
export default Phones;