import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'gray';
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
    width={width}
    height={height}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button<{
  variant: string;
  width?: string | null;
  height?: string | null;
}>`
  ${({ theme }) => theme.font.label1m};

  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ variant, width, height }) => {
    switch (variant) {
      case 'primary':
        return `
          color: ${theme.color.primary700};
          background-color: ${theme.color.primary50};
          width: ${width};
          height: ${height};

          &:hover {
          color: ${theme.color.primary700};
            background-color: ${theme.color.primary100};
          }
        `;

      case 'secondary':
        return `
         color: ${theme.color.primary50};
         background-color: ${theme.color.primary600};
         width: ${width};
         height: ${height};

         &:hover {
           color: ${theme.color.primary50};
           background-color: ${theme.color.primary700};
         }
        `;

      case 'gray':
        return `
          color: ${theme.color.white};
          background-color: ${theme.color.gray800};
          width: ${width};
          height: ${height};
          
          &:hover {
            color: ${theme.color.white};
            background-color: ${theme.color.gray700};
          }
          `;

      default:
        return `
          color: ${theme.color.gray700};
          background-color: ${theme.color.gray200};
          width: ${width};
          height: ${height};
          cursor: default;
        `;
    }
  }}
`;
