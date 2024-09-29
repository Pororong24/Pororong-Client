import { LoginButton } from '@/components/common/LoginButton';
import styled from '@emotion/styled';

export const LoginPage = () => {
  return (
    <div>
      <StyledContainer>
        <LoginButton variant="kakao" width="274px" height="56px">
          Kakao로 3초만에 시작하기
        </LoginButton>
        <br />
        <LoginButton variant="google" width="274px" height="56px">
          Google로 3초만에 시작하기
        </LoginButton>
      </StyledContainer>
    </div>
  );
};

//임시 스타일
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 80vh;
  padding: 118px 63px;
`;
