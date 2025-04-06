'use client';

import classNames from 'classnames/bind';
import style from './Content.module.scss';
import Button from '/components/atoms/button/Button';
import PostCardContainer from '/components/pages/board/[subject]/post-card-container/PostCardContainer';
import Tab from '/components/atoms/tab/Tab';
import Filter from '/components/atoms/filter/Filter';
import BorderedButton from '/components/atoms/button/BorderedButton';
import Pagination from '/components/atoms/pagination/Pagination';

const cx = classNames.bind(style);

const ContentPage = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-top')}>
        <div className={cx('title')}>나의 콘텐츠</div>
        <Tab
          defaultCheckKey="1"
          elements={[
            { key: '1', title: <>나의 글</>, count: 12 },
            { key: '2', title: <>나의 댓글</>, count: 12 },
          ]}
        />
      </div>
      <div className={cx('wrapper-bottom')}>
        <div className={cx('top')}>
          <Filter />
          <div>
            <BorderedButton width={68} height={40} content="삭제" chosen>
              삭제
            </BorderedButton>
          </div>
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

export default ContentPage;
