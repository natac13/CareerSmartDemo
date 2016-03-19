/** dependencies ***/
import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import classnames from 'classnames';
import Promise from 'bluebird';

/** Third-party Components ***/
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import Icon from 'react-fa';

/** styling ***/
import style from './style';

const ContactForm = (props) => {
  const {
    fields: { name, email, situation },
    handleSubmit,
    submitting,
    resetForm,
    closeAllQuestions,
    className,
    addUser,
    isOpen,
    contactClose,
  } = props;

  // returns a promise so that the submitting value gets updated from redux-from
  function submit(values) {
    return new Promise((resolve, reject) => {
      const actionObj = addUser(values);
      if (!actionObj.error) {
        setTimeout(() => {
          closeAllQuestions();
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
  }

  const formClass = classnames({
    [style.form]: true,
    [className]: !!className,
  });
  // wrapping the resetform and closeAllQuestions function calls
  function handleClose() {
    resetForm();
    closeAllQuestions();
    contactClose();
  }
  return (
    <Dialog
      active={isOpen}
      onOverlayClick={closeAllQuestions}
      className={style.wrapper}
    >
      <form
        role="form"
        className={formClass}
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
              onClick={handleSubmit(submit)}
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
              onClick={handleClose}
            />
          </div>
        </form>
    </Dialog>
  );
};

ContactForm.propTypes = {
  closeAllQuestions: PropTypes.func.isRequired,
  className: PropTypes.string,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addUser: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default reduxForm({
  form: 'contact',
  fields: ['name', 'email', 'situation'],
})(ContactForm);
