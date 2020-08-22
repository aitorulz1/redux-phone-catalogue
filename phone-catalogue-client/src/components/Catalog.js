import React, { Fragment, useEffect, useState } from 'react';
import PhoneDetail from './PhoneDetail'
import logo from '../images/logo-sidebar.png';
import logoMain from '../images/logo-main.png';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

// useSelector es la forma de obtener el state y useDispatch nos permite a través de dispatch, pasar una función a la función que traido de Actions

import { useSelector, useDispatch } from 'react-redux';
import { obtenerListadoPhones } from '../actions/phonesActions';





// Actions Redux

const Phones = () => {

    const [index, setIndex] = useState(null)

    const dispatch = useDispatch();

    useEffect(() => {

    // Consultar la api

    const cargarPhones = () => dispatch( obtenerListadoPhones() );
    setTimeout(() => {
    cargarPhones();
    }, 3000);
    }, []);


 
    // Obtener el state y traerme al front el array de phones

    const phones = useSelector( state => state.phones.phones );
    
    const onClickShow = (id) => {
        setIndex(id)
    }

    return ( 
        <Fragment>
            
            <div className="sidebar-container">

                    <div className="sidebar-header-container">
                        <div className="">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                    </div>
                
                <div className="sidebar-list-container">
                    <div className="sidebar-list">
                        
                        { phones.length === 0 ? <Spinner /> 
                        : 
                        (
                        phones.sort((a, b) => a.id > b.id ? 1 : -1).map(phone => (
                                // <PhoneList
                                //     key={phone.id}
                                //     phone={phone}
                                // />
                        <div className="select-phone" onClick={() => onClickShow(phone.id)}>{phone.name}</div>
                        )))
                        }
                    </div>
                </div>

            </div>

            <div className="main-container">
                {index !== null ?
            <PhoneDetail 
            phone={phones[index]}
            /> : <div className="main-container-inicio"><img src={logoMain} /></div>    
            }
                        
            </div>

        </Fragment>
     );
}
 
export default Phones;