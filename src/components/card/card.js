import React, { Component } from 'react';
import { STYLE } from '../../reducers/index';
import './card.css';
import Paper from 'material-ui/Paper';

export default class Card extends Component {
    render(){

        const ASCII_START = 64;

        return (
            <Paper className="card">
                {this.props.type === STYLE.NUMBER?this.props.value:String.fromCharCode(ASCII_START + this.props.value)}
            </Paper>
        )
    }
}