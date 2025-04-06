'use client';

import { ReactElement, ReactNode, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Tab.module.scss';

const cx = classNames.bind(style);

interface ElementProps {
  key: string | number;
  title: ReactElement;
  count?: number;
}
interface Props {
  elements: ElementProps[];
  defaultCheckKey: string | number;
  onChange?: (key: string | number) => void;
}
const Tab = ({ elements, defaultCheckKey, onChange, ...className }: Props) => {
  const [activeKey, setActiveKey] = useState(defaultCheckKey);
  return (
    <div className={cx('wrapper', className)}>
      <ul className={cx('tab-wrapper')}>
        {elements.map((ele) => {
          return (
            <li
              key={ele.key}
              className={activeKey === ele.key && cx('active')}
              onClick={() => {
                setActiveKey(ele.key);

                if (onChange) {
                  onChange(ele.key);
                }
              }}
              role="presentation"
            >
              {ele.title}
              {ele.count && <span>{ele.count}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tab;
