import React from 'react';
import { enzymeSetUp } from '../../Utils';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

enzymeSetUp()

describe('<Spinner />', () => {
    const wrapper = shallow(<Spinner />)
    
    test('Should contain class SpinnerContainer', () => {
        expect(wrapper.hasClass('SpinnerContainer')).toBeTruthy()
    })
        
    test('Should contain class sk-chase', () => {
        expect(wrapper.hasClass('sk-chase')).toBeTruthy()
    })

    test('Should contain classes sk-chase-dot', () => {
        expect(wrapper.hasClass('sk-chase-dot')).toBeTruthy()
    })
        

})
