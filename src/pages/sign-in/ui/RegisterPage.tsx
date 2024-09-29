import { Card, CardHeader, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { AppRoute } from '~/shared/constants';
import { Link } from '~/shared/ui';

import { Layout } from './Layout';

export function RegisterPage(): JSX.Element {
  return (
    <Layout>
      <Register />
    </Layout>
  );
}

function Register(): JSX.Element {
  return (
    <StyledCard>
      <StyledCardHeader
        title={
          <Typography component="h1" variant="h6">
            Register
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="textSecondary">
            Already have an account?{' '}
            <Link
              variant="subtitle2"
              underline="none"
              color="primary"
              to={AppRoute.Login}
            >
              Login
            </Link>
          </Typography>
        }
      />
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 444px;
  min-height: 300px;
  margin: auto;
  border-radius: 16px;
`;

const StyledCardHeader = styled(CardHeader)`
  padding: 32px 24px 16px;
`;
