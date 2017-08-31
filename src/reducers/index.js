import * as actions from '../actions';

export const STYLE = {
    CARD:'card',
    NUMBER:'number',
    LETTER:'letter'
}

const initialState = {
    array:[],
    style:STYLE.CARD
};

export const reducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
};