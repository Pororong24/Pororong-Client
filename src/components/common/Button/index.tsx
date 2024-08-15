import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary';
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
    {children}
  </StyledButton>
);

const StyledButton = styled.button<{
  variant: string;
  $width?: string | null;
  $height?: string | null;
}>`
  ${({ theme }) => theme.font.label1m};

  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ variant, $width, $height }) => {
    switch (variant) {
      case 'primary':
        return `
          //나중에
          width: ${$width};
          height: ${$height};
        `;
      case 'secondary':
        return `
         //나중에
        `;
      default:
        return `
          //나중에
        `;
    }
  }}

  &:disabled {
    color: ${theme.color.gray700};
    background-color: ${theme.color.gray200};
    cursor: default;
  }
`;
