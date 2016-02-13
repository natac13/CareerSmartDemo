/*** dependencies ***/
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import classnames    from 'classnames';
import Promise       from 'bluebird';

/*** My functions ***/
import { checkAnyOpen } from '../../js/core-questions';

/*** Third-party Components ***/
import TextField    from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Icon from 'react-fa';


/*** actions ***/
import { addUser } from '../../actions/';

/*** styling ***/
import style from './style';
import * as colors from '../../scss/colors';

const ContactForm = (props) => {

    const submit = (values, dispatch) => {
        // return a promise so that the submitting value gets updated from
        // redux-from.
        return new Promise((resolve, reject) => {
            const actionObj = dispatch(addUser(values));
            if (actionObj.error !== true) {
                setTimeout(() => {
                    resolve();
                }, 1000); // simulate latency
            } else {
                const error = {
                    name: 'There was an error on our end. Please just try again.',
                    _error: 'ADD_ERROR'
                };
                reject(error);
            }

        });

    };

    const {
            fields: { name, email, situation },
            handleSubmit,
            submitting,
            resetForm
        } = props;

    const formClass = classnames({
        [`${style.form}`]: true,
        [`${style.visible}`]: checkAnyOpen(props.questionsMap),
        [`${style.hidden}`]: !checkAnyOpen(props.questionsMap)
    });
    console.log(props)
    return (
        <div className={style.wrapper}>

            <form
                role="form"
                className={formClass}
                id="contact"
                onSubmit={handleSubmit(submit)} >
                <TextField
                    hintText="Your Name"
                    type="text"
                    floatingLabelText="Enter Full Name"
                    fullWidth={true}
                    {...name} />

                <TextField
                    hintText="Email Address"
                    type="email"
                    floatingLabelText="Enter Your Email"
                    fullWidth={true}
                    {...email} />

                <TextField
                    hintText="Your personal story..."
                    type="text"
                    multiLine={true}
                    floatingLabelText="Enter Personal Situation"
                    fullWidth={true}
                    {...situation} />
                <RaisedButton
                    label="Contact Lionel"
                    labelPosition="before"
                    disabledBackgroundColor={colors.disabled}
                    disabled={submitting}
                    backgroundColor={colors.darkBlue}
                    labelColor={colors.lightText}
                    fullWidth={true}
                    icon={submitting ?
                        <Icon spin name="spinner" /> :
                        <Icon name="paper-plane-o"/>}
                    type="submit" />
                <RaisedButton
                    label="Clear Form"
                    labelPosition="before"
                    disabledBackgroundColor={colors.disabled}
                    onClick={resetForm}
                    disabled={submitting}
                    backgroundColor={colors.darkBlue}
                    labelColor={colors.lightText}
                    fullWidth={true}
                    icon={<Icon name="trash-o" /> }
                    type="button" />


            </form>
        </div>
    );
};

export default reduxForm({
    form: 'contact',
    fields: ['name', 'email', 'situation']
})(ContactForm);