'use client';

import classNames from 'classnames/bind';
import style from './ContentBox.module.scss';
import Button from '/components/atoms/button/Button';

interface EmptyProps {
  title: string;
  subTitle: string;
}

interface Props {
  title: string;
  emptyProps: EmptyProps;
}
const cx = classNames.bind(style);

const ContentBox = ({ title, emptyProps }: Props) => {
  return (
    <div className={cx('box')}>
      <p className={cx('box-title')}>{title}</p>
      <div className={cx('box-empty')}>
        <p>{emptyProps.title}</p>
        <p>{emptyProps.subTitle}</p>
      </div>
      <Button width={305.33} height={56} className={cx('box-button')}>
        {title} 전체보기
      </Button>
    </div>
  );
};

export default ContentBox;
