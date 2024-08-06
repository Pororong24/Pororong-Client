import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <TestStyle>Test</TestStyle>
    </div>
  );
};

const TestStyle = styled.div`
  ${theme.font.h1};
  color: ${theme.color.primary500};
`;
