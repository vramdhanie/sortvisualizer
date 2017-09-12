import * as actions from '../actions';
import {SET_KEYS, SET_STYLE, SHUFFLE_KEYS} from "../actions/index";

export const STYLE = {
    CARD:'card',
    NUMBER:'number',
    LETTER:'letter'
}

const initialState = {
    array:[],
    style:STYLE.NUMBER,
    numberCards:13,
    keys:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
        case SET_STYLE:
            return {
                ...state,
                style: action.style
            };
        case SET_KEYS:
            return {
                ...state,
                keys: action.keys
            };
        case SHUFFLE_KEYS:
            const keys = state.keys;
            keys.forEach((k, i, a) => {
                a.splice(i, 1);
                a.splice(Math.floor(Math.random() * a.length), 0, k);
            });
            return {
                ...state,
                keys: [...keys]
            }
        default:
            return state;
    }
};