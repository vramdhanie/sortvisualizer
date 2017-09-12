import React, { Component } from 'react';
import './arena.css';
import Sequence from '../sequence/sequence';
import Register from '../register/register';
import { connect } from 'react-redux';
import Card from '../card/card';
import { shuffleKeys } from '../../actions/index';

export class Arena extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.dispatch(shuffleKeys());
    }

    render(){

        const registers = this.props.registers.map((register, index) => {
            return <Register key={index}/>
        } );

        const cards = this.props.keys.map(key => <Card key={key} value={key + 1} type={this.props.style}/>)

        return (
            <div className="arena">
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