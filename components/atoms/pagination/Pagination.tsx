'use client';

import classNames from 'classnames/bind';
import { useState } from 'react';

import style from './Pagination.module.scss';

const cx = classNames.bind(style);

type PaginationProps = {
  start?: number;
  end?: number;
  length?: number;
};
const range = (start, stop, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
const Pagination = ({ start, end, length = 30 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  let maxPage;
  let minPage;

  if (currentPage >= 3 && length > 10) {
    if (currentPage >= length - 6) {
      minPage = length - 9;
    } else {
      minPage = currentPage - 3;
    }
  } else {
    minPage = 0;
  }
  if (length > 10) {
    if (currentPage <= 3) {
      maxPage = 8;
    } else if (currentPage >= length - 6) {
      maxPage = length - 1;
    } else {
      maxPage = 5 + currentPage;
    }
  } else {
    maxPage = length - 1;
  }
  return (
    <div className={cx('pagination-wrapper')}>
      <button
        type="button"
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
      >
        이전
      </button>
      {range(minPage, maxPage).map((index) => (
        <button
          type="button"
          key={index}
          className={cx('page-number', {
            clicekd: index + 1 === currentPage,
          })}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        onClick={() => {
          if (currentPage < length) setCurrentPage(currentPage + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;
