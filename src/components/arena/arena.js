import React, { Component } from 'react';
import './arena.css';
import Sequence from '../sequence/sequence';
import Register from '../register/register';
import { connect } from 'react-redux';

export class Arena extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const registers = this.props.registers.map(register => {
            return <Register/>
        } );

        return (
            <div className="arena">
                This is the Arena

                { registers }

                <Sequence />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(Arena);