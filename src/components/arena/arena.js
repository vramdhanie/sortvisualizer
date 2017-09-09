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

        const registers = this.props.registers.map((register, index) => {
            return <Register key={index}/>
        } );

        return (
            <div className="arena">
                This is the Arena
                <div className="registers">
                    { registers }
                </div>

                <Sequence />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(Arena);