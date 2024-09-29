import { Container, styled } from '@mui/material';

import gradientBackgroundImage from '~/shared/assets/images/gradient-background.png';
import darkLogoIcon from '~/shared/assets/images/logo-dark.svg';

type LayoutProps = {
  children: JSX.Element;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>{children}</StyledMain>
    </StyledWrapper>
  );
}

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Container>
        <img src={darkLogoIcon} alt="Devias kit pro logo" />
      </Container>
    </StyledHeader>
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
