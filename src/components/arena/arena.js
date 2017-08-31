import React, { Component } from 'react';
import './arena.css';
import Sequence from '../sequence/sequence';

export default class Arena extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="arena">
                This is the Arena

                <Sequence/>

            </div>
        )
    }
}