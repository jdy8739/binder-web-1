'use client';

import Filter from '/components/atoms/filter/Filter';
import style from './Alram.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const AlramCard = ({ read = false }: { read?: boolean }) => {
  return (
    <div className={cx('alram-card', read && 'read')}>
      <div className={cx('alram-content', read && 'alram-content-read')}>
        <span className={cx(`alram-read`, read && 'alram-read-unread')} />
        내가 작성한 게시글에 Aaasia님이 답글을 작성했습니다.
      </div>
      <div>5분전</div>
    </div>
  );
};
const AlramFilter = [
  { key: 'All', label: '전체' },
  { key: 'Readed', label: '읽음' },
  { key: 'Unreaded', label: '읽지 않음' },
];
const AlramPage = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('notice-all')}>
        읽지 않은 알림 <span>4</span>개
      </div>
      <Filter
        keylist={AlramFilter}
        className={cx('filter-wrapper')}
        defaultCheck="All"
      />
      <div className={cx('alram-container')}>
        {[0, 1, 2, 3, 4].map(() => (
          <AlramCard />
        ))}
        {[0, 1, 2, 3, 4].map(() => (
          <AlramCard read />
        ))}
      </div>
    </div>
  );
};

export default AlramPage;
