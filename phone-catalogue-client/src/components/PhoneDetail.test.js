import React from 'react';
import { enzymeSetUp } from '../Utils';
import { shallow } from 'enzyme';
import PhoneDetail from './PhoneDetail'

enzymeSetUp();

describe('<PhoneDetail />', () => {


    it('Should find at least "color" |', () => {
        const wrapper = shallow(<PhoneDetail />);
        expect(wrapper.findWhere(n => n.type === 'div' && n.contains('color |')))
    })

    it('Should find symbol "£" into a div |', () => {
        const wrapper = shallow(<PhoneDetail />);
        expect(wrapper.findWhere(n => n.type === 'div' && n.contains('£')))
    })

    test('Should find data-title-container', () => {
        const wrapper = shallow(<PhoneDetail />)
        expect(wrapper.find('.data-title-container'))
    })

    test('Should find phone-data-container', () => {
        const wrapper = shallow(<PhoneDetail />)
        expect(wrapper.find('.phone-data-container'))
    })

    test('Should find info-container', () => {
        const wrapper = shallow(<PhoneDetail />)
        expect(wrapper.find('.info-container'))
    })

    test('Should find info', () => {
        const wrapper = shallow(<PhoneDetail />)
        expect(wrapper.find('.info'))
    })

    test('Should find 6 description-container', () => {
        const wrapper = shallow(<PhoneDetail />)
        expect(wrapper.find('.description-container'))
    })




});

