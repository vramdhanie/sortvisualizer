import React, { Component } from 'react';
import { STYLE } from '../../reducers/index';
import './card.css';

export default class Card extends Component {
    render(){

        const ASCII_START = 64;

        return (
            <div className="card">
                {this.props.type === STYLE.NUMBER?this.props.value:String.fromCharCode(ASCII_START + this.props.value)}
            </div>
        )
    }
}