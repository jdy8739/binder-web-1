'use client';

import classNames from 'classnames/bind';
import { useParams } from 'next/navigation';
import style from './me.module.scss';
import UserSideBar from '../components/SideBar';
import ContentPage from '/components/pages/auth/me/content-page/Content';
import ScrapPage from '/components/pages/auth/me/scrap/Scrap';
import ConfigPage from '/components/pages/auth/me/config-page/Config';
import AlramPage from '/components/pages/auth/me/alram-page/Alram';

const cx = classNames.bind(style);

const TagMapping = (tag: string) => {
  switch (tag) {
    case 'content':
      return <ContentPage />;
    case 'scrap':
      return <ScrapPage />;
    case 'config':
      return <ConfigPage />;
    case 'alram':
      return <AlramPage />;
    default:
      return <div />;
  }
};
const MyTag = () => {
  const { tag } = useParams();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidebar-wrapper')}>
        <UserSideBar />
      </div>
      {typeof tag === 'string' && TagMapping(tag)}
    </div>
  );
};

export default MyTag;
