import React from 'react'
import { shallow } from 'enzyme';
import { enzymeSetUp, testStore } from '../enzyme.config'
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';

// Components

import Catalog from './Catalog';

enzymeSetUp()

function setup() {
    const store = testStore(props)
    const wrapper = shallow('<Catalog store={store} />').childAt(0).dive()
    return{ wrapper, props };
    };
    
    


describe('<Catalog />', () => {
    let wrapper;


beforeEach(() => {
    const props = {
      loading: false,
      data: [
        {
          color: "white",
          description: "Great phone with an excellent interface. One of the best mid price range phones in the market.",
          id: 3,
          imageFileName: "P10_Lite.jpg",
          manufacturer: "Huawei",
          name: "P10 Lite",
          price: 249,
          processor: "Kirin 658",
          ram: 4,
          screen: "5,2 inch Full-HD",
        }
      ],
      error: null
    }

    wrapper = setUp(props)
  })

  describe('Checking PropTypes', () => {
    test('Should not throw a warning', () => {      
      let propsError = checkPropTypes(
        Catalog.WrappedComponent.propTypes, wrapper, 'props', Catalog.name
      )
      expect(propsError).toBeUndefined()
    })
  })


  describe('Catalog Component renders', () => {
    
    test('Renders without errors', () => {
      const component = wrapper.find('.Catalog')
      expect(component.length).toBe(1)
    })

    test('Should receive props', () => {
      const component = wrapper.find('PhoneDetail')
      expect(component.props()).toBeTruthy()
    })

    test('Should render PhoneDeatil component', () => {
      const component = wrapper.find('PhoneDetail')
      expect(component.length).toBe(1)
    })
    
  })

});

