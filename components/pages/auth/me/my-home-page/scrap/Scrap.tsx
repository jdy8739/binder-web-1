'use client';

import classNames from 'classnames/bind';
import style from './Scrap.module.scss';
import ContentBox from '/components/common/contentbox/ContentBox';

const cx = classNames.bind(style);

const Scrap = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-text')}>스크랩/좋아요</div>
      <div className={cx('wrapper-box')}>
        <ContentBox
          title="스크랩"
          emptyProps={{
            title: '스크랩한 글이 없어요',
            subTitle: '원하는 콘텐츠를 저장해보세요.',
          }}
        />
        <ContentBox
          title="좋아요"
          emptyProps={{
            title: '좋아요한 글이 없어요',
            subTitle: '원하는 콘텐츠를 저장해보세요.',
          }}
        />
      </div>
    </div>
  );
};

export default Scrap;
