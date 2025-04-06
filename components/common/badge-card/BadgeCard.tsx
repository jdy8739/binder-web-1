'use client';

import classNames from 'classnames/bind';
import style from './BadgeCard.module.scss';

const cx = classNames.bind(style);

const BadgeCard = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('badge-image')}>
        <div />
      </div>
      <div className={cx('badge-content')}>
        <div className={cx('title')}>조언자(초보)</div>
        <div>
          <div>받은 추천수(게시글 +댓글) 100개 이상</div>
          <div>2024.10.10</div>
        </div>
      </div>
    </div>
  );
};

export default BadgeCard;
