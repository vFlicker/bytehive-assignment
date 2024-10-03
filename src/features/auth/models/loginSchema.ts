import * as Yup from 'yup';

const LoginMessage = {
  email: {
    required: 'Email is required',
    invalid: 'Invalid email format',
  },
  password: {
    required: 'Password is required',
    min: 'Password must be at least 6 characters',
    max: 'Password must be at most 36 characters',
  },
};

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required(LoginMessage.email.required)
    .email(LoginMessage.email.invalid),
  password: Yup.string()
    .required(LoginMessage.password.required)
    .min(6, LoginMessage.password.min)
    .max(36, LoginMessage.password.max),
});
