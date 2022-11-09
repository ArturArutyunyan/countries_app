import * as Yup from 'yup';

const validateForm = Yup.object({
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .required('Password is required'),
});

export default validateForm;
