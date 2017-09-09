import React, { Component } from 'react';
import './arena.css';
import Sequence from '../sequence/sequence';
import Register from '../register/register';
import { connect } from 'react-redux';
import Card from '../card/card';

export class Arena extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const registers = this.props.registers.map((register, index) => {
            return <Register key={index}/>
        } );

        const cards = [];
        for(let i = 0; i < this.props.numberCards; i++){
            cards.push(<Card key={i} value={i + 1} type={this.props.style}/>);
        }

        return (
            <div className="arena">
                This is the Arena
                <div className="registers">
                    { registers }
                </div>

                <Sequence cards={cards}/>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(Arena);