import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { checkAnyOpen } from '../../js/core-questions';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import style from './style';
import * as colors from '../../scss/colors';

const ContactForm = (props) => {

    const submit = (values, dispatch) => {
        console.log(values);
    };

    const {
            fields: { name, email, situation },
            handleSubmit,
            submitting,
            resetForm
        } = props;
    return (
        <div className={style.wrapper}>

            <form
                role="form"
                className={checkAnyOpen(props.questionsMap) ? style.visible : style.hidden}
                id="contact" >
                <TextField
                    hintText="Your Name"
                    type="text"
                    floatingLabelText="Enter Full Name"
                    {...name} />

                <TextField
                    hintText="Email Address"
                    type="email"
                    floatingLabelText="Enter Your Email"
                    {...email} />

                <TextField
                    hintText="Your personal story..."
                    type="text"
                    multiLine={true}
                    floatingLabelText="Enter Personal Situation"
                    {...situation} />
                <RaisedButton
                    label="Contace Lionel"
                    backgroundColor={colors.darkBlue}
                    labelColor={colors.lightText}
                    onClick={handleSubmit(submit)} />


            </form>
        </div>
    );
};

export default reduxForm({
    form: 'contact',
    fields: ['name', 'email', 'situation']
})(ContactForm);