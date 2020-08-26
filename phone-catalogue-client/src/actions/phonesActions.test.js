import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchData } from '../types';
import moxios from 'moxios';



const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);



    describe('Async fecth actions', () => {

            beforeEach(function () {
            moxios.install()
            })
        
            afterEach(function () {
            moxios.uninstall()
            })

    
        test('Dispatches the correct action and payload', () => {
            const expectedState = [
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
                },
            ];

            const store = mockStore(() => state);
            moxios.wait(() => {
              const request = moxios.requests.mostRecent()
              request.respondWith({
                status: 200,
                response: expectedState
              })
            })

            const newState = () => async () => {
                store.dispatch(fetchData())
                const response = await store.getState()
                expect(response.data).toBe(expectedState)
              }
            })
            
        })
    






