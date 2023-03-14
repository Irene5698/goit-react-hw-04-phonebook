import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(5).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        onSubmitForm(name, number);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.formLabel}>
          Name
          <Field
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.erorMessage}
          />
        </label>
        <label htmlFor="number" className={css.formLabel}>
          Number
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.erorMessage}
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

Formik.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
