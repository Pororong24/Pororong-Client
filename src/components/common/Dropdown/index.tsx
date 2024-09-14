/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import CheckLogo from '@/assets/icons/check.svg';
import { theme } from '@/styles/theme';
export interface DropdownProps {
  items: string[];
  width?: string;
}

export const Dropdown = ({ items, width = '160px' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <DropdownWrapper>
      <DropdownButton width={width} onClick={toggleDropdown}>
        {isOpen ? 'Category' : '선택'}
        <IconWrapper>
          <img src={CheckLogo} alt="CheckLogo" />
        </IconWrapper>
      </DropdownButton>
      {isOpen && (
        <DropdownContent width={width}>
          {items.map((item, index) => (
            <DropdownItem key={index}>{item}</DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button<{ width: string }>`
  background-color: ${theme.color.white};
  color: ${theme.color.gray300};
  border: none;
  padding: 16px;
  cursor: pointer;
  ${theme.font.body2r};
  width: ${(props) => props.width};
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
`;

const DropdownContent = styled.div<{ width: string }>`
  position: absolute;
  background-color: ${theme.color.white};
  color: ${theme.color.gray800};
  ${theme.font.body2r};
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
  z-index: 1;
  width: ${(props) => props.width};
  margin-top: 12px;
`;

const DropdownItem = styled.div`
  padding: 12px 24px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const IconWrapper = styled.div``;
