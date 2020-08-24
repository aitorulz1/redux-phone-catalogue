import React from 'react';
import { shallow } from 'enzyme';
import { enzymeSetUp } from '../../Utils';
import Header from './Header';


enzymeSetUp();

describe('<Header />', () => {
    const wrapper = shallow(<Header />)

    test('Should contain class sidebar-header-container', () => {
        expect(wrapper.hasClass('sidebar-header-container')).toBeTruthy()
    })

    test('Should render an image', () => {
        const wrapper = shallow(<Header />)
        const component = component.find('img')
        expect(wrapper.type('img')).toBe('img')
    })
    
})