'use client';

import classNames from 'classnames/bind';

import style from './PostAnswer.module.scss';
import ProfileAvatar from '/components/atoms/profile/ProfileAvatar';
import Tag from '/components/common/tag/Tag';
import Button from '/components/atoms/button/Button';
import { PostThumb, SpeechBallon } from '/assets/svg';
import BorderedButton from '/components/atoms/button/BorderedButton';

const cx = classNames.bind(style);

const PostAnswer = () => {
  return (
    <div className={cx('card')}>
      <div className={cx('answer')}>
        <div className={cx('profile-card')}>
          <ProfileAvatar size="lg" />
        </div>
        <div className={cx('answer-title')}>
          <span>게시글 타이틀입니다.</span>
        </div>
        <div className={cx('answer-board')}>
          <span>직무 게시판</span>
        </div>
        <div className={cx('answer-content')}>
          <span>답변답변답변</span>
        </div>
        <div className={cx('answer-tags')}>
          <Tag tagName={['#태그', '#태그']} />
          <div>
            <span>2024.03.13작성</span>
          </div>
        </div>
      </div>
      <div className={cx('comment')}>
        <div className={cx('comment-header')}>
          <div className={cx('comment-header-wrapper')}>
            <button type="button">
              <PostThumb />
              <span>공감하기</span>
            </button>
            <button type="button">
              <SpeechBallon />
              <span>댓글달기</span>
            </button>
          </div>

          <div>
            <BorderedButton className={cx('report')} content="신고" chosen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAnswer;
