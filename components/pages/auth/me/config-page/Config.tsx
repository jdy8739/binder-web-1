'use client';

import classNames from 'classnames/bind';
import { useState } from 'react';
import style from './Config.module.scss';
import Tab from '/components/atoms/tab/Tab';
import EditProfile from './edit-profile/EditProfile';
import MyBadge from './my-badge/MyBadge';
import FindPassword from './find-password/FindPassword';

const cx = classNames.bind(style);

const KeyMapping = (key: number | string) => {
  switch (key) {
    case 1:
      return <EditProfile />;
    case 2:
      return <MyBadge />;
    case 3:
      return <FindPassword />;
    default:
      return <div />;
  }
};
const ConfigPage = () => {
  const [tabKey, setTabKey] = useState<string | number>(1);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-top')}>
        <div className={cx('title')}>개인정보 수정</div>
        <Tab
          elements={[
            {
              key: 1,
              title: <>프로필</>,
            },
            {
              key: 2,
              title: <>나의 배지</>,
            },
            {
              key: 3,
              title: <>비밀번호 변경</>,
            },
          ]}
          defaultCheckKey={1}
          onChange={setTabKey}
        />
      </div>
      {KeyMapping(tabKey)}
    </div>
  );
};

export default ConfigPage;
