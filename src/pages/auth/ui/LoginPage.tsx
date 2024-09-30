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
import { Link } from '~/shared/ui';

import { Layout } from './Layout';

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

  const handleSubmit = async (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      try {
        const data = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        // TODO: Fix types in swagger. Return `token` instead of `accessToken`.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { token } = await mutation.mutateAsync({ data });
        tokenStorage.saveToken(token);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <StyledCard>
      <StyledCardHeader
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

const StyledCardHeader = styled(CardHeader)`
  padding: 32px 24px 16px;
`;

const StyledCardContent = styled(CardContent)`
  padding: 16px 24px 32px;
`;

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
