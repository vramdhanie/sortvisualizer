import React from 'react';
import { shallow } from 'enzyme';
import Nav from './nav';

describe('Nav', () => {
    it('should render', () => {
        shallow(<Nav/>);
    });
});