'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import Style from './Sidebar.module.scss';

const cx = classNames.bind(Style);

const UserSideBar = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const tag = params.tag || 'my';

  const sidebarConfig = [
    {
      title: 'MY 홈',
      className:
        tag === 'my' ? cx('sidebar-button-active') : cx('sidebar-button'),
      searchTag: '',
    },
    {
      title: '나의 콘텐츠',
      className:
        tag === 'content' ? cx('sidebar-button-active') : cx('sidebar-button'),
      searchTag: 'content',
    },
    {
      title: '스크랩/좋아요',
      className:
        tag === 'scrap' ? cx('sidebar-button-active') : cx('sidebar-button'),
      searchTag: 'scrap',
    },
    {
      title: '개인정보 수정',
      className:
        tag === 'config' ? cx('sidebar-button-active') : cx('sidebar-button'),
      searchTag: 'config',
    },
    {
      title: '나의 알림',
      className:
        tag === 'alram' ? cx('sidebar-button-active') : cx('sidebar-button'),
      searchTag: 'alram',
    },
  ];
  return (
    <div className={cx('sidebar-wrapper')}>
      {sidebarConfig.map((ele, idx) => {
        return (
          <div className={ele.className} key={ele.title}>
            <Link href={`/auth/me/${ele.searchTag}`}>{ele.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserSideBar;
