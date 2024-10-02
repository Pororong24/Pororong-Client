import styled from '@emotion/styled';
import { forwardRef, useState } from 'react';

export interface ButtonInputProps extends React.HTMLAttributes<HTMLInputElement> {
  width?: string | number;
  warning?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onButtonClick?: () => void;
}

export const ButtonInput = forwardRef<HTMLInputElement, ButtonInputProps>(function ButtonInput(
  { warning = false, disabled = false, width, children, onButtonClick, ...props },
  ref
) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <StyledContainer $warning={warning} $focused={isFocused} $width={width} style={{ width }}>
      <input ref={ref} onFocus={handleFocus} onBlur={handleBlur} disabled={disabled} {...props} />
      <StyledButton disabled={disabled} onClick={onButtonClick}>
        {children}
      </StyledButton>
    </StyledContainer>
  );
});

const StyledContainer = styled.div<{
  $warning: boolean;
  $focused: boolean;
  $width: string | number | undefined;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;

  width: ${({ $width }) => ($width ? $width : 'auto')};

  border: 1px solid transparent;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  input {
    flex: 1 0 0;
    background: transparent;
    border: none;
    outline: none;

    ${({ theme }) => theme.font.body2r};
    color: ${({ theme }) => theme.color.gray700};

    &::placeholder {
      color: ${({ theme }) => theme.color.gray300};
    }
  }

  background: ${({ $focused, theme }) => ($focused ? theme.color.gray100 : 'inherit')};

  border-color: ${({ $warning, theme }) => ($warning ? theme.color.warning : 'transparent')};
  background: ${({ $warning, theme }) => ($warning ? theme.color.gray100 : 'inherit')};
  color: ${({ $warning, theme }) => ($warning ? theme.color.warning : 'inherit')};

  ${({ $disabled, theme }) =>
    $disabled &&
    `
      background: ${theme.color.gray100};
      input {
        color: ${theme.color.gray300};
      }
    `}
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  width: 56px;
  height: 32px;
  ${({ theme }) => theme.font.label2};
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.gray800};
  border-radius: 8px;
  border: none;

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray250};
    cursor: not-allowed;
  }
`;
