import React, { Component } from 'react';
import './arena.css';
import Array from '../array/array';

export default class Arena extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="arena">
                This is the Arena

                <Array/>

            </div>
        )
    }
}