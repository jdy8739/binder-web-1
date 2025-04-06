'use client';

import Link from 'next/link';
import classNames from 'classnames/bind';

import Button from '../../../../components/atoms/button/Button';
import SignInput from '../../../../components/atoms/sign-input/SignInput';
import { Google, Kakao, Naver } from '/assets/svg';

import style from './Signin.module.scss';
import useInput from '/business/hook/useInput';
import { requestPost } from '/business/hook/useApi';
import { ApiTokenResponseInterface } from '/business/models/models';

const cx = classNames.bind(style);
const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
const Page = () => {
  const emailInput = useInput({});
  const passwordInput = useInput({});

  const onLogin = async () => {
    if (emailInput.value && passwordInput.value) {
      const res = await requestPost<ApiTokenResponseInterface>(
        '/api/auth/login',
        {
          email: emailInput.value,
          password: passwordInput.value,
        },
        { withCredentials: true },
      );
      console.log(res);
      if (res.code === 200) {
        // sucess login
        alert('로그인 성공');
      } else if (res.code === 401) {
        // unauth
        alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      } else if (res.code === 400) {
        // bad request
        alert(`${res.error?.message}`);
      } else if (res.code === 404) {
        // Not found error
        alert('알수없는 에러가 발생하였습니다.');
      }
    }
  };
  return (
    <main className={cx('main')}>
      <div className={cx('title')}>
        <div>바인더</div>
        <div>
          <span>Bio</span>
          <span>Industry</span>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <SignInput
          label="이메일"
          helperText={
            !emailRegEx.test(emailInput.value) && emailInput.value
              ? '올바른 이메일을 입력해주세요.'
              : ''
          }
          isError={
            !emailRegEx.test(emailInput.value) && emailInput.value !== ''
          }
          required
          onChange={(e) => {
            emailInput.changeValue(e.target.value);
          }}
          value={emailInput.value}
          type="email"
        />
        <SignInput
          label="비밀번호"
          helperText=""
          required
          isPassword
          onChange={(e) => {
            passwordInput.changeValue(e.target.value);
          }}
          value={passwordInput.value}
        />
        <Button content="로그인" onClick={onLogin} type="button" />
      </form>
      <div>
        <Link href="/auth/signup">회원가입</Link>
        <Link href="/auth/findpw">비밀번호 찾기</Link>
      </div>
      <section>
        <div>소셜 계정으로 간편 로그인</div>
        <div>
          <button type="button">
            <Google />
          </button>
          <button type="button">
            <Kakao />
          </button>
          <button type="button">
            <Naver />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;
