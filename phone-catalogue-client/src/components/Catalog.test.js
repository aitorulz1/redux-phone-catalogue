import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeSetUp } from '../Utils';
import Catalog from './Catalog';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'; 


const middlewares = [];
const mockStore = configureStore(middlewares);

enzymeSetUp();

describe('<Catalog />', () => {
    it('should render a spinner if the phone list does not load', () => {
        const store = mockStore({
          phones: { complete: false }
        });
        const wrapper = mount(
          <Provider store={store}>
            <Catalog />
          </Provider>
        )
        expect(wrapper.find('PhoneDetail').length)
      })

});





