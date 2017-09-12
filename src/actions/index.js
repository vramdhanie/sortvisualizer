export const SHUFFLE_KEYS = 'SHUFFLE_KEYS';
export const shuffleKeys = () => ({
    type: SHUFFLE_KEYS
});

export const SET_KEYS = 'SET_KEYS';
export const setKeys = keys => ({
    type: SET_KEYS,
    keys
});

export const SET_STYLE = 'SET_STYLE';
export const setStyle = (style) => ({
    type: SET_STYLE,
    style
});