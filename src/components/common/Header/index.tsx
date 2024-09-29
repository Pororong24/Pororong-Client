/** @jsxImportSource @emotion/react */
import { NAVIGATION_MENU } from '@/constants/navigation';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TempLogo from '@/assets/icons/TempLogo.svg';

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <Link to="/">
        <IconWrapper>
          <img src={TempLogo} alt="TempLogo" />
        </IconWrapper>
      </Link>
      <StyledMenuContainer>
        {NAVIGATION_MENU.map((item) => (
          <StyledMenuButton
            key={item.menu}
            onClick={() => {
              navigate(item.path);
            }}
          >
            {item.menu}
          </StyledMenuButton>
        ))}
        {loggedIn ? (
          <StyledLoginButton>로그인</StyledLoginButton>
        ) : (
          <StyledLoginButton
            onClick={() => {
              setLoggedIn((prev) => !prev);
            }}
          >
            로그아웃
          </StyledLoginButton>
        )}
      </StyledMenuContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 95%;

  padding: 18px 42px;

  border-bottom: 1px solid ${({ theme }) => theme.color.primary100};
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
`;
const StyledMenuContainer = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;
`;
const StyledMenuButton = styled.div`
  ${({ theme }) => theme.font.body2m};
`;

const StyledLoginButton = styled.button`
  ${({ theme }) => theme.font.label1m};

  padding: 8px 24px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.color.primary900};
  color: ${({ theme }) => theme.color.white};
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;

  cursor: pointer;
`;
