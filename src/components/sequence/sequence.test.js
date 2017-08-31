import React from 'react';
import { shallow } from 'enzyme';
import Sequence from './sequence';

describe('Sequence', () => {
    it('should render', () => {
        shallow(<Sequence/>);
    });
});