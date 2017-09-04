import React from 'react';
import { shallow } from 'enzyme';
import Register from './register';

describe('register', () => {

    it('should render', () => {
        shallow(<Register/>);
    });

});