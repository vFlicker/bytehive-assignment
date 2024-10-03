import * as Yup from 'yup';

const LoginUserMessage = {
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

export const authSchema = Yup.object().shape({
  email: Yup.string()
    .required(LoginUserMessage.email.required)
    .email(LoginUserMessage.email.invalid),
  password: Yup.string()
    .required(LoginUserMessage.password.required)
    .min(6, LoginUserMessage.password.min)
    .max(36, LoginUserMessage.password.max),
});
