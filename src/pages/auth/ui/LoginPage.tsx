import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { usePostApiAuthLogin } from '~/shared/api';
import { tokenStorage } from '~/shared/libs';
import { AppRoute } from '~/shared/router';
import { Layout, Link } from '~/shared/ui';

import { authSchema } from '../models/authSchema';
import { StyledCard } from './styles';

export function LoginPage(): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Login />
    </Layout>
  );
}

type LoginFormData = {
  email: string;
  password: string;
};

function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(authSchema),
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
    <StyledCard>
      <CardHeader
        title={
          <Typography component="h1" variant="h6">
            Log in
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="textSecondary">
            Don't have an account?{' '}
            <Link
              variant="subtitle2"
              underline="none"
              color="primary"
              to={AppRoute.Register}
            >
              Register
            </Link>
          </Typography>
        }
      />
      <StyledCardContent>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            label="Email address"
            variant="filled"
            fullWidth
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            autoFocus
          />
          <StyledInput
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
      </StyledCardContent>
    </StyledCard>
  );
}

const StyledCardContent = styled(CardContent)`
  padding: 16px 24px 32px;
`;

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledInput = styled(TextField)`
  border: 1px solid #f2f4f7;
  border-radius: 8px;

  &:hover::before {
    border: none;
  }

  &:hover,
  &:active {
    background-color: #ffffff;
  }

  .MuiInputBase-root {
    background-color: #ffffff;
    border: none;

    &::before,
    &::after,
    &:hover:not(.Mui-disabled, .Mui-error):before {
      border-bottom: none;
    }

    &:hover,
    &:active {
      background-color: #ffffff;
    }

    &.Mui-focused {
      background-color: #ffffff;
    }
  }

  & .MuiInputLabel-filled.Mui-focused {
    color: #6c737f;
  }
`;
