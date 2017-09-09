import * as actions from '../actions';
import {SET_STYLE} from "../actions/index";

export const STYLE = {
    CARD:'card',
    NUMBER:'number',
    LETTER:'letter'
}

const initialState = {
    array:[],
    style:STYLE.NUMBER,
    numberCards:12,
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
            }
        default:
            return state;
    }
};