import { Button } from '@/components/common/Button';
import { ButtonInput } from '@/components/common/ButtonInput';
import { Dropdown } from '@/components/common/Dropdown';
import styled from '@emotion/styled';

export const OnboardForm = () => {
  const handleClick = () => {
    console.log('click');
    //TODO: 닉네임 입력창 열기
  };
  const buttonhandleClick = () => {
    console.log('click2');
    //TODO: 어딘가로 이동
  };
  return (
    <StyledContainer>
      <InputContainer>
        <div className="Title">닉네임 입력하기</div>
        <ButtonInput onClick={handleClick} width="472px">
          Text
        </ButtonInput>
        <div className="Description">중복된 이름·특수문자 사용불가</div>
      </InputContainer>
      <InputContainer>
        <div className="Title">정보 입력하기</div>
        <Dropdown items={['여행자', '가이드']} width="498px" />
        <div className="Description">여행자 or 가이드</div>
      </InputContainer>
      <ButtonContainer>
        <Button variant="gray" onClick={buttonhandleClick} width="500px" height="48px">
          다음으로
        </Button>
      </ButtonContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 500px;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const InputContainer = styled.div`
  .Title {
    margin-bottom: 8px;

    ${({ theme }) => theme.font.body1m};
    color: ${({ theme }) => theme.color.black};
  }

  .Description {
    margin-top: 8px;

    ${({ theme }) => theme.font.label1r};
    color: ${({ theme }) => theme.color.primary200};
  }
`;

const ButtonContainer = styled.div`
  padding-top: 188px;
`;
