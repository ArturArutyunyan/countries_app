import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';

import validationLoginScheme from '../../helpers/validationLoginScheme';
import { login } from '../../redux/actions';

import styles from './LoginForm.module.css';

function LoginForm() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.userReducer);

  const handleSubmit = (event) => {
    dispatch(login(event));
  };
  return (
    <div className={styles.content}>
      {error && <p className={styles.error}>{error}</p>}
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={validationLoginScheme}
        validateOnBlur
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className={styles.form}>
            <Field
              name="email"
              placeholder="Enter@your.email"
              type="email"
              className={styles.field}
              onChange={(e) => {
                const value = e.target.value || '';
                setFieldValue('email', value.toLowerCase());
              }}
            />
            { errors.email && touched.email && <div className={styles.error}>{errors.email}</div> }

            <Field
              name="password"
              placeholder="******"
              type="password"
              className={styles.field}
              autoComplete="on"
            />
            { errors.password && touched.password
            && <div className={styles.error}>{errors.password}</div> }

            <span>
              <Field type="checkbox" name="rememberMe" />
              &nbsp; Remember me
            </span>

            <div><button type="submit" className={styles.button}>Sign In</button></div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
