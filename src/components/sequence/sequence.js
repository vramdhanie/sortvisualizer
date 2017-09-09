import React, { Component } from 'react';
import './sequence.css';

export default class Sequence extends Component {
    render(){

        return (
            <div className="sequence">
                {this.props.cards}
            </div>
        );
    }
}