import React from 'react';
import phonesReducer from './phonesReducer';
import{
    GET_DATA,
    DATA_SUCCEED,
} from '../types';




describe('reducer', () => {

    test('should return the inital state', () => {
        const newState = phonesReducer(undefined, {})
            expect(newState.phones).toEqual([])
            expect(newState.loading).toEqual(false)
            expect(newState.error).toEqual(null) 
        })


    test('Should return requesting data pending true', () => {
        const newState = phonesReducer(undefined, {        
            type: GET_DATA
        })
        expect(newState.loading).toEqual(true)
    })

    test('Should return requesting the object and error false', () => {

        const phones = [
            {
                id: 0,
                name: "iPhone 7",
                manufacturer: "Apple",
                description: "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
                color: "black",
                price: 769,
                imageFileName: "IPhone_7.png",
                phoneColor:"black.png",
                screen: "4,7 inch IPS",
                processor: "A10 Fusion",
                ram: 2
            }
        ]

        const newState = phonesReducer(undefined, {        
            type: DATA_SUCCEED,
            payload: phones
        })
        expect(newState.loading).toEqual(false)
        expect(newState.error).toEqual(null)
        expect(newState.phones).toEqual(phones)
    })

    

});



