import React from 'react';
import { enzymeSetUp } from '../../Utils';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

enzymeSetUp();

describe('<Spinner />', () => {
    
    test('Should contain class SpinnerContainer', () => {
        const wrapper = shallow(<Spinner />)
        expect(wrapper.hasClass('SpinnerContainer'))
    })
        
    test('Should contain class sk-chase', () => {
        const wrapper = shallow(<Spinner />)
        expect(wrapper.hasClass('sk-chase'))
    })

    test('Should contain classes sk-chase-dot', () => {
        const wrapper = shallow(<Spinner />)
        expect(wrapper.hasClass('sk-chase-dot'))
    })
        

})
