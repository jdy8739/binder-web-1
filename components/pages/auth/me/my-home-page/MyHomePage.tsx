'use client';

import classNames from 'classnames/bind';
import BadgeList from './badge-list/BadgeList';
import MiniProfile from './mini-profile/MiniProfile';
import MyContent from './my-content/MyContent';
import Scrap from './scrap/Scrap';
import style from './MyHomePage.module.scss';

const cx = classNames.bind(style);
const MyHomePage = () => {
  return (
    <div className={cx('box-wrapper')}>
      <div className={cx('flex-wrapper')}>
        <div>
          <MiniProfile />
        </div>
        <div>
          <BadgeList />
        </div>
      </div>
      <MyContent />
      <Scrap />
    </div>
  );
};
export default MyHomePage;
