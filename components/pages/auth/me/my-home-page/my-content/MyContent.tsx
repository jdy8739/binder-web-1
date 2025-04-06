'use client';

import Button from '/components/atoms/button/Button';
import style from './MyContent.module.scss';
import classNames from 'classnames/bind';
import ContentBox from '/components/common/contentbox/ContentBox';

const cx = classNames.bind(style);

const MyContent = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-text')}>나의 콘텐츠</div>
      <div className={cx('wrapper-box')}>
        <ContentBox
          title="나의 글"
          emptyProps={{
            title: '나의 질문이 없어요',
            subTitle: '나를 성장시켜줄 새로운 지식을 탐구해보세요.',
          }}
        />
        <ContentBox
          title="나의 답변"
          emptyProps={{
            title: '나의 답변이 없어요',
            subTitle: '나를 성장시켜줄 새로운 지식을 탐구해보세요.',
          }}
        />
        <ContentBox
          title="나의 댓글"
          emptyProps={{
            title: '나의 댓글이 없어요',
            subTitle: '나를 성장시켜줄 새로운 지식을 탐구해보세요.',
          }}
        />
      </div>
    </div>
  );
};

export default MyContent;
