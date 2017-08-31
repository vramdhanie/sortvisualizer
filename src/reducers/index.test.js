import { reducer, STYLE } from './index';

describe('reducer', () => {
    it('should set an initial state', () => {
        const state = reducer(undefined, {type:'_UNKNOWN'});
        expect(state).toEqual({
            array:[],
            style:STYLE.CARD
        });
    });
});
