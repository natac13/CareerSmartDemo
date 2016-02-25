/*** dependencies ***/
import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { reduxForm } from 'redux-form';
import classnames    from 'classnames';
import Promise       from 'bluebird';

/*** My functions ***/
import {
  checkAnyOpen,
  closeAll
} from '../../js/core-questions';

/*** Third-party Components ***/
import Dialog from 'react-toolbox/lib/dialog';
import Input  from 'react-toolbox/lib/input';
import { Button, IconButton } from 'react-toolbox/lib/button';
import TextField    from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Icon from 'react-fa';


/*** actions ***/
import { addUser } from '../../actions/';

/*** styling ***/
import style from './style';

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
    resetForm,
    questions,
    closeAll
  } = props;

  const formClass = classnames({
    [style.form]: true,
    [style.visible]: checkAnyOpen(questions),
    [style.hidden]: !checkAnyOpen(questions)
  });
  console.log(props)
  return (
    <Dialog
      active={checkAnyOpen(questions)}
      onOverlayClick={() => closeAll(questions)}
      className={style.wrapper}>

      {/*<form
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
              disabled={submitting}
              fullWidth={true}
              icon={submitting ?
                  <Icon spin name="spinner" /> :
                  <Icon name="paper-plane-o"/>}
              type="submit" />
          <RaisedButton
              label="Clear Form"
              labelPosition="before"
              onTouchTap={resetForm}
              disabled={submitting}
              fullWidth={true}
              icon={<Icon name="trash-o" /> }
              type="button" />


      </form>*/}
    </Dialog>
  );
};

ContactForm.propTypes = {
  questions: ImmutablePropTypes.listOf(ImmutablePropTypes.map).isRequired,
  closeAll: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'contact',
  fields: ['name', 'email', 'situation']
})(ContactForm);