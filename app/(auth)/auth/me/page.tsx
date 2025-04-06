'use client';

import classNames from 'classnames/bind';
import UserSideBar from './components/SideBar';
import BadgeList from '/components/pages/auth/me/my-home-page/badge-list/BadgeList';
import MiniProfile from '/components/pages/auth/me/my-home-page/mini-profile/MiniProfile';

import style from './me.module.scss';
import MyContent from '/components/pages/auth/me/my-home-page/my-content/MyContent';
import Scrap from '/components/pages/auth/me/my-home-page/scrap/Scrap';
import MyHomePage from '/components/pages/auth/me/my-home-page/MyHomePage';

const cx = classNames.bind(style);

const Page = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidebar-wrapper')}>
        <UserSideBar />
      </div>
      <MyHomePage />
    </div>
  );
};

export default Page;
