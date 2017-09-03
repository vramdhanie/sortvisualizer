import React, { Component } from 'react';
import './arena.css';
import Sequence from '../sequence/sequence';
import Register from '../register/register';
import PropTypes from 'prop-types';

export default class Arena extends Component {

    static propTypes = {
        registers: PropTypes.array()
    }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="arena">
                This is the Arena



                <Sequence />

            </div>
        )
    }
}