import React from 'react';
import styled from '@emotion/styled';
import KakaoLogo from '@/assets/icons/kakao.svg';
import GoogleLogo from '@/assets/icons/google.svg';
import { theme } from '@/styles/theme';

export interface LoginButtonProps {
  variant?: 'kakao' | 'google';
  children: React.ReactNode;
  width?: string | null;
  height?: string | null;
  onClick?: () => void;
  disabled?: boolean;
}

export const LoginButton = ({
  variant = 'kakao',
  children,
  width = null,
  height = null,
  onClick,
  disabled = false,
  ...props
}: LoginButtonProps) => (
  <StyledButton
    variant={variant}
    $width={width}
    $height={height}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {variant === 'kakao' && (
      <img
        src={KakaoLogo}
        alt="Kakao"
        style={{ marginRight: '16px', width: '24px', height: '24px' }}
      />
    )}

    {variant === 'google' && (
      <img
        src={GoogleLogo}
        alt="Google"
        style={{ marginRight: '12px', width: '24px', height: '24px' }}
      />
    )}
    {children}
  </StyledButton>
);

const StyledButton = styled.button<{
  variant: string;
  $width?: string | null;
  $height?: string | null;
}>`
  ${({ theme }) => theme.font.body2m};
  width: 100%;
  height: 100%;
  padding: 0 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ variant, $width, $height }) => {
    switch (variant) {
      case 'kakao':
        return `
          background-color: #fee500;
          color: ${theme.color.black};
          width: ${$width};
          height: ${$height};
          border: 1px solid  #fee500;
          &:hover {
            filter: brightness(80%);
          }
        `;
      case 'google':
        return `
          background-color:${theme.color.white};
          color: ${theme.color.black};
          width: ${$width};
          height: ${$height};
          border: 1px solid ${theme.color.gray200};
          &:hover {
            filter: brightness(80%);
          }
        `;
    }
  }}

  &:disabled {
    color: ${theme.color.gray700};
    background-color: ${theme.color.gray200};
    cursor: default;
  }
`;
