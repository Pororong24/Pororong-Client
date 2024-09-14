import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { LoginButton } from '@/components/common/LoginButton';
import { ReactComponent as CheckLogo } from '@/assets/icons/check.svg';

export const TestPage = () => {
  return (
    <div>
      <h1>Page1</h1>
      <TestStyle>Test</TestStyle>
      <LoginButton variant="kakao" width="274px" height="56px">
        Kakao로 3초만에 시작하기
      </LoginButton>
      <LoginButton variant="google" width="274px" height="56px">
        Google로 3초만에 시작하기
      </LoginButton>
      <CheckLogo />
    </div>
  );
};

const TestStyle = styled.div`
  ${theme.font.h1};
  color: ${theme.color.primary500};
`;
