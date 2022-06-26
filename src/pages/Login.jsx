import React, { useEffect, useState, useRef, useContext } from 'react';
import styled from 'styled-components';

import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);

  const isButtonDisabled = !isEmailValid || !isPasswordValid;

  const emailRef = useRef();
  const passwordRef = useRef();

  const context = useContext(AuthContext);

  const { login } = context;

  useEffect(() => {
    const accountInformation = localStorage.getItem('accountInformation');

    if (accountInformation) {
      login();
    }
  }, []);

  const testAccount = {
    id: 'test@gmail.com',
    password: '!Test1234',
  };

  const checkEmailValidation = () => {
    const enteredEmail = emailRef.current.value;

    enteredEmail.length ? setIsEmailEntered(true) : setIsEmailEntered(false);

    const emailRegEx = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    emailRegEx.test(enteredEmail)
      ? setIsEmailValid(true)
      : setIsEmailValid(false);
  };

  const checkPasswordValidation = () => {
    const enteredPassword = passwordRef.current.value;

    enteredPassword.length
      ? setIsPasswordEntered(true)
      : setIsPasswordEntered(false);

    const passwordRegEx =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    passwordRegEx.test(enteredPassword)
      ? setIsPasswordValid(true)
      : setIsPasswordValid(false);
  };

  const checkAccountValidation = (account) => {
    let isValidAccount = true;

    if (
      testAccount.id !== account.id ||
      testAccount.password !== account.password
    ) {
      isValidAccount = false;
    }

    return isValidAccount;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const enteredAccount = {
      id: enteredEmail,
      password: enteredPassword,
    };

    if (!checkAccountValidation(enteredAccount)) {
      alert('유효한 계정이 아닙니다!');
      return;
    }

    localStorage.setItem('accountInformation', JSON.stringify(enteredAccount));

    login();
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Title>Instagram</Title>
        <Form onSubmit={handleSubmit}>
          <EmailInputBox
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            ref={emailRef}
            isValid={isEmailValid}
            isEntered={isEmailEntered}
            onChange={checkEmailValidation}
          />
          <PasswordInputBox
            type="password"
            placeholder="비밀번호"
            ref={passwordRef}
            isValid={isPasswordValid}
            isEntered={isPasswordEntered}
            onChange={checkPasswordValidation}
          />
          <Button type="submit" disabled={isButtonDisabled}>
            로그인
          </Button>
          <LineContainer>
            <Line></Line>
            <Or>또는</Or>
            <Line></Line>
          </LineContainer>
          <FaceBookLoginButton>Facebook으로 로그인</FaceBookLoginButton>
          <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
        </Form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 396px;

  background-color: white;
  border: 1px solid #dbdbdb;
`;

const Title = styled.h1`
  margin: 36px 0;
  font-size: 45px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailInputBox = styled.input.attrs(() => ({
  required: true,
}))`
  height: 38px;
  width: 268px;
  padding: 9px 0 7px 8px;
  margin: 0 40px 6px;
  color: #8e8e8e;
  border: 1px solid
    ${({ isValid, isEntered }) => (!isEntered || isValid ? '#dbdbdb' : 'red')};
  border-radius: 3px;
  background-color: #fafafa;
`;

const PasswordInputBox = styled(EmailInputBox)``;

const Button = styled.button`
  height: 30px;
  width: 268px;
  margin: 8px 40px;
  color: white;
  border-radius: 3px;
  ${({ isValidAccount }) => (isValidAccount ? '#dbdbdb' : 'red')};
  background-color: ${({ disabled }) => (disabled ? '#bae0fc' : '#0095F6')};
`;

const Line = styled.div`
  height: 1px;
  width: 105px;
  background-color: #dbdbdb;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 15px;
  width: 268px;
  margin: 10px 40px 18px;
`;

const Or = styled.div`
  font-size: 13px;
  color: #8e8e8e;
`;

const FaceBookLoginButton = styled.button`
  margin: 8px 40px;
  font-size: 14px;
  font-weight: bold;
  color: #385185;
  background-color: white;
`;

const FindPassword = styled.a`
  margin: 8px 40px;
  font-size: 12px;
  color: #385185;
`;
