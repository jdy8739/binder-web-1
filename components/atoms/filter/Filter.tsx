'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import Radio from '../radio/Radio';
import style from './Filter.module.scss';

const cx = classNames.bind(style);

interface FilterKey {
  key: string | number;
  label: string;
}

interface Props {
  defaultCheck?: string | number;
  keylist?: FilterKey[];
  className?: string;
}

const DefaultFilter: FilterKey[] = [
  {
    key: 'LATEST',
    label: '최신순',
  },
  {
    key: 'MOSTLIKE',
    label: '추천순',
  },
  {
    key: 'MOSTVIEWED',
    label: '조회수',
  },
];
const Filter = ({
  defaultCheck = 'LATEST',
  keylist = DefaultFilter,
  className,
}: Props) => {
  // const [filterCheck, setFilterCheck] = useState<FilterEnum>(defaultCheck);

  return (
    <div className={cx('wrapper', className)}>
      <ul>
        {keylist.map((ele) => {
          return (
            <li key={ele.key}>
              <Radio name="filter" defaultChecked={ele.key === defaultCheck} />
              <p>{ele.label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
