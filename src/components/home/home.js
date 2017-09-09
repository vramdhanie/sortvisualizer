import  React, { Component } from 'react';
import './home.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/navigation/chevron-right';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import { Route } from 'react-router';
import { setStyle } from '../../actions/index';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { STYLE } from '../../reducers/index';

export class Home extends Component {

    constructor(props){
        super(props);
    }



    render(){
        const { dispatch } = this.props;
        const action = bindActionCreators(setStyle, dispatch);
        const startBtn = () => (
            <Route render={({ history }) => (
                <FloatingActionButton onClick={() => { history.push('/arena') }}>
                    <ContentAdd/>
                </FloatingActionButton>
            )}/>
        )
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
                            <RadioButton value="letters" label="Letters" onClick={()=>action(STYLE.LETTER)}/>
                            <RadioButton value="numbers" label="Numbers" onClick={()=>action(STYLE.NUMBER)}/>
                            <RadioButton value="cards" label="Cards"/>
                        </RadioButtonGroup>
                    </Paper>

                </section>
                <section className="home__start">
                    { startBtn() }
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(Home);
