import React from 'react';
import { shallow } from 'enzyme';
import Arena from './arena';

describe('Arena', () => {
    it('should render', () => {
        shallow(<Arena/>);
    })
});