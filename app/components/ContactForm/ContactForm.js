/** dependencies ***/
import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { reduxForm } from 'redux-form';
import classnames from 'classnames';
import Promise from 'bluebird';

/** My functions ***/
import {
  checkAnyOpen,
} from '../../js/core-questions';

/** Third-party Components ***/
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import { Button, IconButton } from 'react-toolbox/lib/button';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Icon from 'react-fa';


/** actions ***/
import { addUser } from '../../actions/';

/** styling ***/
import style from './style';

const ContactForm = (props) => {

  const {
    fields: { name, email, situation },
    handleSubmit,
    submitting,
    resetForm,
    questions,
    closeAllQuestions,
    className,
  } = props;

  const submit = (values, dispatch) => {

    // return a promise so that the submitting value gets updated from
    // redux-from.
    return new Promise((resolve, reject) => {
      const actionObj = dispatch(addUser(values));
      if (actionObj.error !== true) {
        setTimeout(() => {
          closeAllQuestions(questions);
          resolve();
        }, 1000); // simulate latency
      } else {
        const error = {
          name: 'There was an error on our end. Please just try again.',
          _error: 'ADD_ERROR',
        };
        reject(error);
      }
    });
  };


  const formClass = classnames({
    [style.form]: true,
    [className]: !!className,
  });
  return (
    <Dialog
      active={checkAnyOpen(questions)}
      onOverlayClick={() => closeAllQuestions(questions)}
      className={style.wrapper}
    >

      <form
        role="form"
        className={formClass}
        onSubmit={handleSubmit(submit)}
      >

        <Input
          type="text"
          label="Enter Name"
          icon={<Icon name="user" />}
          {...name}
        />

        <Input
          type="text"
          label="Enter Email"
          icon={<Icon name="envelope" />}
          {...email}
        />

        <Input
          type="text"
          label="Your Situation"
          multiline
          icon={<Icon name="file-text" />}
          {...situation}
        />

          <div className={style.btnGroup}>

            <Button
              raised
              className={style.button}
              type="submit"
              disabled={submitting}
              icon={submitting ?
                <Icon spin name="spinner" />
              : <Icon name="paper-plane-o" />}
              label="Submit"
              primary
              neutral
            />

            <Button
              raised
              className={style.button}
              type="button"
              disabled={submitting}
              icon={<Icon name="trash-o" />}
              label="Cancel"
              primary
              netural
              onClick={() => {
                resetForm();
                closeAllQuestions(questions);
              }}
            />
          </div>
        </form>

    </Dialog>
  );
};

ContactForm.propTypes = {
  questions: ImmutablePropTypes.listOf(ImmutablePropTypes.map).isRequired,
  closeAllQuestions: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default reduxForm({
  form: 'contact',
  fields: ['name', 'email', 'situation']
})(ContactForm);