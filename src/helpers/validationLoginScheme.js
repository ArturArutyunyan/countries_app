import * as Yup from 'yup';

const validationLoginScheme = Yup.object({
  email: Yup.string()
    .email('Email is invalid')
    .max(255, 'Maximum 255 characters')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .max(255, 'Maximum 255 characters')
    .required('Password is required'),
});

export default validationLoginScheme;
