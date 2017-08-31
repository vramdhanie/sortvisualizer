import React from 'react';
import { shallow } from 'enzyme';
import array from './array';

describe('Array', () => {
    it('should render', () => {
        shallow(<Array/>);
    });
});