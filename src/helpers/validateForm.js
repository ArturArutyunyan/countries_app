import * as Yup from 'yup';

const validateForm = Yup.object({
  email: Yup.string()
    .email('Email is invalid')
    .max(30, 'Maximum 30 characters')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .max(20, 'Maximum 20 characters')
    .required('Password is required'),
});

export default validateForm;
