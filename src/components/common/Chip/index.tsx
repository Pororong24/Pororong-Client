import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export interface ChipProps {
  width?: string | null;
  children: React.ReactNode;
}

export const Chip = ({ width, children }: ChipProps) => (
  <StyledContainer width={width}>{children}</StyledContainer>
);

const StyledContainer = styled.div<{ width?: string | null }>`
  width: ${(props) => props.width || 'auto'};
  height: 36px;
  padding: 0 16px;
  border-radius: 8px;

  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  cursor: default;

  ${({ theme }) => theme.font.body1m};
  color: ${theme.color.primary800};
  background-color: ${theme.color.primary50};
`;
