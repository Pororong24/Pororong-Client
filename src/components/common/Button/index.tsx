import React from 'react';
import styled from '@emotion/styled';
import KakaoLogo from '@/assets/icons/kakao.svg';
import { theme } from '@/styles/theme';

export interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'kakao';
  children: React.ReactNode;
  width?: string | null;
  height?: string | null;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  variant = 'default',
  children,
  width = null,
  height = null,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => (
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
        style={{ paddingRight: '24px', width: '24px', height: '24px' }}
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
  ${({ theme }) => theme.font.label1m};

  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ variant, $width, $height }) => {
    switch (variant) {
      case 'kakao':
        return `
          background-color: #fee500;
          color: #000000;
           width: ${$width || 'auto'};
          height: ${$height || 'auto'};
          border: 1px solid  #fee500;
          &:hover {
            filter: brightness(80%);
          }
        `;
      case 'primary':
        return `
          //나중에
        `;
      case 'secondary':
        return `
         //나중에
        `;
      default:
        return `
          background-color: #E0E0E0;
          color: #000000;
          &:hover {
            background-color: #C0C0C0;
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
