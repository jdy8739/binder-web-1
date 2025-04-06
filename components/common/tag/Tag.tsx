'use client';

import classNames from 'classnames/bind';
import style from './Tag.module.scss';

const cx = classNames.bind(style);
interface Props {
  tagName: string[];
}

const Tag = ({ tagName }: Props) => {
  return (
    <div className={cx('tags-area')}>
      {tagName.map((tag, idx) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
};

export default Tag;
