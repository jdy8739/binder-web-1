'use client';

import classNames from 'classnames/bind';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import style from './PostThumbnail.module.scss';

const cx = classNames.bind(style);

interface Props {
  className?: string;
  index: number;
}

const PostThumbnail = ({ className, index }: Props) => {
  const router = useRouter();
  return (
    <div className={cx('wrapper', className)}>
      <div className={cx('thumbnail-img')} />
      <div className={cx('thumbnail-info')}>
        <div className={cx('thumbnail-info-main')}>
          <span>직무게시판 10시간 전</span>
          <span className={cx('likes')}>
            <span>추천</span>
            &nbsp;
            <span>24</span>
          </span>
        </div>
        <Link className={cx('title')} href={`/board/post/${index}`}>
          글제목 {index}
        </Link>
        <div className={cx('tag-list')}>
          <span>#유전학</span>
        </div>
      </div>
    </div>
  );
};

export default PostThumbnail;
