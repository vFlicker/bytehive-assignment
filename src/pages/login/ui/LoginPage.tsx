import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import MUILink from '@mui/material/Link';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import gradientBackgroundImage from '~/shared/assets/images/gradient-background.png';
import darkLogoIcon from '~/shared/assets/images/logo-dark.svg';

export function LoginPage(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledHeader>
        <Container>
          <img src={darkLogoIcon} alt="Devias kit pro logo" />
        </Container>
      </StyledHeader>

      <StyledMain>
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
                <MUILink
                  variant="subtitle2"
                  underline="none"
                  component={Link}
                  color="primary"
                  to="/register"
                >
                  Register
                </MUILink>
              </Typography>
            }
          />
          <StyledCardContent>
            <StyledForm>
              <TextField label="Email address" variant="outlined" fullWidth />
              <TextField label="Password" variant="outlined" fullWidth />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Log in
              </Button>
              <MUILink
                variant="subtitle2"
                underline="none"
                textAlign="center"
                color="primary"
                component={Link}
                to="/password-reset"
              >
                Forgot password?
              </MUILink>
            </StyledForm>
          </StyledCardContent>
        </StyledCard>
      </StyledMain>
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;

  background-image: url(${gradientBackgroundImage});
  background-repeat: no-repeat;
`;

const StyledMain = styled('main')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled('header')`
  padding: 16px 0;
`;

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
  padding: 16 24px 32px;
`;

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
