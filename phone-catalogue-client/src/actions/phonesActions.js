import{
    GET_DATA,
    DATA_SUCCEED,
    DATA_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// Get all the phones

export function obtenerListadoPhones() {
    return async (dispatch) => {
        dispatch( descargarPhones () );

        try {
            setTimeout( async() => {
                const respuesta = await clienteAxios.get('/phones');
                console.log(respuesta)
            }, 3000);
        } catch (error) {
                // dispatch(descargaPhonesError())
        }
    }
}

const descargarPhones = () => ({
    type: GET_DATA,
    payload: true
})

// const descargaPhonesSucceed = (phones) => ({
//     type: DATA_SUCCEED,
//     payload: phones
// })

// const descargaPhonesError = () => ({
//     type: DATA_ERROR,
//     payload: true
// })