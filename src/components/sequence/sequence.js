import React, { Component } from 'react';
import './sequence.css';
import Card from "../card/card";

export default class Sequence extends Component {
    render(){
        return (
            <div className="sequence">
                <Card key="1" value="1"/>
                <Card key="2" value="2"/>
                <Card key="3" value="3"/>
                <Card key="4" value="4"/>
                <Card key="5" value="5"/>
                <Card key="6" value="6"/>
                <Card key="7" value="7"/>
                <Card key="8" value="8"/>
                <Card key="9" value="9"/>
                <Card key="10" value="10"/>
                <Card key="11" value="11"/>
                <Card key="12" value="12"/>
            </div>
        );
    }
}