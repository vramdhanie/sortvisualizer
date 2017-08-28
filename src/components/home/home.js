import  React, { Component } from 'react';
import './home.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/navigation/chevron-right';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';

export default class Home extends Component {
    render(){
        return (
            <div className="home">
                <section className="home__intro">
                    <h1>How It Works</h1>
                    <p>This app is designed to help students walk through a sorting algorithm step by step.</p>
                </section>
                <section className="home__choices">
                    <Paper zDepth={1}>
                        <h1>Options</h1>
                        <p>Choose from these options</p>
                        <RadioButtonGroup name="options">
                            <RadioButton value="letters" label="Letters"/>
                            <RadioButton value="numbers" label="Numbers"/>
                            <RadioButton value="cards" label="Cards"/>
                        </RadioButtonGroup>
                    </Paper>

                </section>
                <section className="home__start">
                    <FloatingActionButton>
                        <ContentAdd/>
                    </FloatingActionButton>
                </section>
            </div>
        );
    }
}