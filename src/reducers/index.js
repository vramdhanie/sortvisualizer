import * as actions from '../actions';

export const STYLE = {
    CARD:'card',
    NUMBER:'number',
    LETTER:'letter'
}

const initialState = {
    array:[],
    style:STYLE.CARD,
    registers:[{
            address: 0,
            content: null
        },
        {
            address: 1,
            content: null
        },
        {
            address: 2,
            content: null
        },
        {
            address: 3,
            content: null
        }]
};

export const reducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
};