import{
    GET_DATA,
    DATA_SUCCEED,
    DATA_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// Get all the phones

export const obtenerListadoPhones = () => async (dispatch) => {
        
        try {
                dispatch( descargarPhones () )
                const respuesta = await clienteAxios.get('/phones');
                dispatch( descargaPhonesSucceed(respuesta.data))
        } catch (error) {
                dispatch(descargaPhonesError())
        }
    }


const descargarPhones = () => ({
    type: GET_DATA,
    payload: true
})

const descargaPhonesSucceed = phones => ({
    type: DATA_SUCCEED,
    payload: phones
})

const descargaPhonesError = () => ({
    type: DATA_ERROR,
    payload: true
})