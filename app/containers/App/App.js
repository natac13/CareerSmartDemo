import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators    from '../../actions';

import ContactForm      from '../../components/ContactForm/';
import QuestionGrouping from '../../components/QuestionGrouping/';
import Header           from '../../components/Header/';


import style from './style';

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {

        return (
            <div className={style.app}>
                <Header />
                <ContactForm
                    questionsMap={this.props.questionAnswers.get('questions')} />
                <QuestionGrouping
                    questionAnswers={this.props.questionAnswers}
                    { ...this.props } />

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