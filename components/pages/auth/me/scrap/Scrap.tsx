'use client';

import classNames from 'classnames/bind';
import style from './Scrap.module.scss';
import Tab from '/components/atoms/tab/Tab';
import Filter from '/components/atoms/filter/Filter';
import PostCardContainer from '/components/pages/board/[subject]/post-card-container/PostCardContainer';
import Pagination from '/components/atoms/pagination/Pagination';

const cx = classNames.bind(style);

const ScrapPage = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-top')}>
        <div className={cx('title')}>스크랩/좋아요</div>
        <Tab
          defaultCheckKey="1"
          elements={[
            { key: '1', title: <>스크랩</>, count: 12 },
            { key: '2', title: <>좋아요</>, count: 12 },
          ]}
        />
      </div>
      <div className={cx('wrapper-bottom')}>
        <div className={cx('top')}>
          <Filter />
        </div>
        <div>
          <PostCardContainer />
        </div>
      </div>
      <div className={cx('wrapper-pagination')}>
        <Pagination length={3} />
      </div>
    </div>
  );
};

export default ScrapPage;
