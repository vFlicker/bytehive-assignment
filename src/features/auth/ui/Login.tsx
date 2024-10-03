import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { usePostApiAuthLogin } from '~/shared/api';
import { tokenStorage } from '~/shared/auth';
import { AppRoute } from '~/shared/router';
import { Input, Link } from '~/shared/ui';

import { loginSchema } from '../models';

type LoginFormData = {
  email: string;
  password: string;
};

export function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const { mutateAsync: login, isPending, error } = usePostApiAuthLogin();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData): Promise<void> => {
    try {
      const { token } = await login({ data });
      tokenStorage.saveToken(token!);
      navigate(AppRoute.Dashboard);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email address"
        variant="filled"
        fullWidth
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        autoFocus
      />
      <Input
        label="Password"
        variant="filled"
        fullWidth
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      {error && (
        <Typography color="error" variant="body2">
          Authentication error. Please check your data and try again.
        </Typography>
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isPending}
      >
        Log in
      </Button>
      <Link
        variant="subtitle2"
        underline="none"
        textAlign="center"
        color="primary"
        to={AppRoute.PasswordReset}
      >
        Forgot password?
      </Link>
    </StyledForm>
  );
}

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
