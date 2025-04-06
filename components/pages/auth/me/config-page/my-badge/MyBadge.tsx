'use client';

import Filter from '/components/atoms/filter/Filter';
import BadgeCard from '/components/common/badge-card/BadgeCard';
import style from './MyBadge.module.scss';
import classNames from 'classnames/bind';
import Pagination from '/components/atoms/pagination/Pagination';

const cx = classNames.bind(style);

const MyBadge = () => {
  return (
    <div className={cx('wrapper')}>
      <Filter
        className={cx('filter')}
        keylist={[
          {
            key: 0,
            label: '전체',
          },
          {
            key: 1,
            label: '활동형',
          },
          {
            key: 2,
            label: '이벤트',
          },
        ]}
        defaultCheck={0}
      />
      <div className={cx('badge-wrapper')}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((ele) => (
          <BadgeCard key={ele} />
        ))}
      </div>
      <div className={cx('pagination-wrapper')}>
        <Pagination length={3} />
      </div>
    </div>
  );
};

export default MyBadge;
