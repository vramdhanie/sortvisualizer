import * as action from './index';

describe('Shuffle Keys', () => {
    it('should return the action', () => {
        const act = action.shuffleKeys();
        expect(act.type).toEqual(action.SHUFFLE_KEYS);
    })
});