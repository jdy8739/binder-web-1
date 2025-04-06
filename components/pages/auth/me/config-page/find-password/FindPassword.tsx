'use client';

import Button from '/components/atoms/button/Button';
import SignInput from '/components/atoms/sign-input/SignInput';
import style from './FindPassword.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const FindPassword = () => {
  return (
    <div className={cx('wrapper')}>
      <div>
        {/* <label>현재 비밀 번호</label> */}
        <SignInput label="현재 비밀 번호" isPassword />
      </div>
      <Button>확인</Button>
      <div className={cx('find-pw-text')}>비밀번호를 잊으셧나요?</div>
    </div>
  );
};

export default FindPassword;
