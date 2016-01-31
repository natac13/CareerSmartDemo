import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';
import QuestionBrick from '../../components/QuestionBrick';


import style from './style';

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const questions = this.props.questionAnswers.get('questions').map((question, index) => {
            return (
                <QuestionBrick
                    key={index}
                    index={index}
                    question={question.get('question')}
                    answers={question.get('answers')}
                    open={question.get('open')}
                    anchorEl={question.get('anchorEl')}
                    openAnswers={this.props.actions.openAnswers}
                    closeAnswers={this.props.actions.closeAnswers} />
            );
        });
        return (
            <div className={style.app}>
                <div className={style.logo} />

                <img
                    src={require('../../resources/img/careers_logo.png')}
                    alt="logo"
                    width="450"
                    height="100"/>
                {questions}
            </div>
        );
    }
}

/*========================================
=            Redux connection            =
========================================*/

function mapStateToProps(state) {
    const questionAnswers = state.questionAnswers;
    return {
        questionAnswers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ActionCreators, dispatch),
        dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

/*=====  End of Redux connection  ======*/