import { Header } from '@/components/common/Header';
import { OnboardForm } from '@/components/OnboardPage/OnboardForm';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const OnboardPage = () => {
  return (
    <Container>
      <Header showMenu={false} />
      <StyledLeftContainer />

      <StyledRightContainer>
        <OnboardForm />
      </StyledRightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledLeftContainer = styled.div`
  width: 45%;
  background-color: ${theme.color.primary50};
  align-items: flex-start;
`;

const StyledRightContainer = styled.div`
  width: 55%;
  background-color: white;

  display: flex;
  justify-content: center;
`;
