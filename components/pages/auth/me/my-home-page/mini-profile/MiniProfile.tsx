'use client';

import classNames from 'classnames/bind';
import Style from './MiniProfile.module.scss';
import ProfileAvatar from '/components/atoms/profile/ProfileAvatar';
import { Profile, ProfileBig, IconEdit } from '/assets/svg';
import Button from '/components/atoms/button/Button';
import BorderedButton from '/components/atoms/button/BorderedButton';

const cx = classNames.bind(Style);

const MiniProfile = () => {
  return (
    <div className={cx('profile-wrapper')}>
      <div className={cx('profile')}>
        <div className={cx('image')}>
          <ProfileBig viewBox="0 0 65 65" width={100} height={100} />
          <IconEdit />
        </div>
        <div className={cx('name-box')}>
          <div>
            <p className={cx('nickname')}>닉네임</p>
          </div>
          <div className={cx('userstat')}>
            <span>연구원</span>
            <span>1년차</span>
          </div>
          <div className={cx('tag-list')}>
            <p>#태그</p>
            <p>#태그</p>
          </div>
        </div>
      </div>
      <div className={cx('profile-title')}>
        <div>
          <p>작성된 소개글이 없습니다.</p>
          <p>본인을 알릴 수 있는 짧은 소개글을 작성해주세요.</p>
        </div>
        <BorderedButton content="수정" chosen>
          수정
        </BorderedButton>
      </div>
    </div>
  );
};

export default MiniProfile;
