import { CardContent, CardHeader, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { Login } from '~/features/auth';
import { tokenStorage } from '~/shared/auth';
import { AppRoute } from '~/shared/router';
import { Layout, Link } from '~/shared/ui';

import { StyledCard } from './styles';

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const hasToken = tokenStorage.hasToken();

  useEffect(() => {
    if (hasToken) navigate(AppRoute.Root);
  }, [hasToken, navigate]);

  return (
    <Layout>
      <Helmet>
        <title>Login</title>
      </Helmet>

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
          <Login />
        </StyledCardContent>
      </StyledCard>
    </Layout>
  );
}

const StyledCardContent = styled(CardContent)`
  padding: 16px 24px 32px;
`;
