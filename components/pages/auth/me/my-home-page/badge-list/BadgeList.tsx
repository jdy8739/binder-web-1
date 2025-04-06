'use client';

import classNames from 'classnames/bind';
import style from './BadgeList.module.scss';

const cx = classNames.bind(style);

const BadgeList = () => {
  return (
    <div className={cx('badge-wrapper')}>
      <div className={cx('wrapper-top')}>
        <div className={cx('badge')} />
        <div>배지 이름</div>
        <div>배지 유형</div>
      </div>

      <div className={cx('wrapper-bottom')}>
        <div className={cx('badge-list')}>
          {[0, 1, 2, 3, 4, 5, 6].map((ele) => {
            return <div className={cx('badge2')} key={ele} />;
          })}
        </div>
        <div>나의 배지 목록 확인 &gt;</div>
      </div>
    </div>
  );
};

export default BadgeList;
