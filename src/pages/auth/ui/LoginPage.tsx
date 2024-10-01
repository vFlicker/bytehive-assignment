import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { SyntheticEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import { usePostApiAuthLogin } from '~/shared/api';
import { tokenStorage } from '~/shared/libs';
import { AppRoute } from '~/shared/router';
import { Layout, Link } from '~/shared/ui';

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

type Response = {
  token: tokenStorage.Token;
};

function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const mutation = usePostApiAuthLogin();

  const handleSubmit = async (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      try {
        const loginCredentials = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        const data = await mutation.mutateAsync({ data: loginCredentials });
        const response = data as unknown as Response; // TODO: fix the type casting
        tokenStorage.saveToken(response.token);
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
          <TextField
            inputRef={emailRef}
            label="Email address"
            variant="outlined"
            fullWidth
          />
          <TextField
            inputRef={passwordRef}
            label="Password"
            variant="outlined"
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

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  max-width: 444px;
  margin: auto;
  border-radius: 16px;
`;

const StyledCardContent = styled(CardContent)`
  padding: 16px 24px 32px;
`;

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
