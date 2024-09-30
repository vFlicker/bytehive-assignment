import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

import { AppRoute } from '~/shared/router';
import { Link } from '~/shared/ui';

import { Layout } from './Layout';

export function LoginPage(): JSX.Element {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

function Login(): JSX.Element {
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
        <StyledForm>
          <TextField label="Email address" variant="outlined" fullWidth />
          <TextField label="Password" variant="outlined" fullWidth />
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
