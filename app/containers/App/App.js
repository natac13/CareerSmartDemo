import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as ActionCreators from '../../actions';
import QuestionBrick from '../../components/QuestionBrick';

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
                    question={question.get('question')}
                    answers={question.get('answers')}
                    open={question.get('open')} />
            );
        });
        return (
            <div >
                Career Smarts
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

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(ActionCreators, dispatch),
//         dispatch
//     };
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
    {}
)(App);

/*=====  End of Redux connection  ======*/