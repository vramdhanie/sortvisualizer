import React from 'react';
import { shallow } from 'enzyme';
import Arena from './arena';
import Sequence from '../sequence/sequence';

describe('Arena', () => {
    it('should render', () => {
       const comp = shallow(<Arena/>);
       expect(comp.find('Sequence')).toHaveLength(1);
    })
});