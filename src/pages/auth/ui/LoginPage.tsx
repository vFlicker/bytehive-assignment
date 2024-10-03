import {
  Button,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { SyntheticEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { usePostApiAuthLogin } from '~/shared/api';
import { tokenStorage } from '~/shared/libs';
import { AppRoute } from '~/shared/router';
import { Layout, Link } from '~/shared/ui';

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

function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const mutation = usePostApiAuthLogin();
  const navigate = useNavigate();

  const handleSubmit = async (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      try {
        const formData = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        const { token } = await mutation.mutateAsync({ data: formData });
        tokenStorage.saveToken(token);
        navigate(AppRoute.Dashboard);
      } catch (error) {
        console.error('Error:', error);
      }
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
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            inputRef={emailRef}
            label="Email address"
            variant="filled"
            fullWidth
          />
          <StyledInput
            inputRef={passwordRef}
            label="Password"
            variant="filled"
            fullWidth
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
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
