'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '/components/atoms/input/Input';
import HashTagInput from '/components/atoms/hashtag-input/HashTagInput';
import Dropdown from '/components/atoms/dropdown/Dropdown';
import Option from '/components/atoms/option/Option';
import Button from '/components/atoms/button/Button';
import TextEditor from '/components/atoms/text-editor/TextEditor';

import { NavDown } from '/assets/svg';

import style from './CreateBoard.module.scss';
import useInput from '/business/hook/useInput';

const cx = classNames.bind(style);

type BoardType = 'jobs' | 'academic' | 'career';

const BOARD_OPTIONS: { value: BoardType; label: string }[] = [
  { value: 'jobs', label: '직무게시판' },
  { value: 'academic', label: '학술게시판' },
  { value: 'career', label: '취직이직게시판' },
] as const;

const CreateBoard = () => {
  const [boardType, setBoardType] = useState<BoardType>('jobs');

  const [chosenTagList, setChosenTagList] = useState<string[]>([]);

  const title = useInput({
    maxLength: 20,
  });
  return (
    <main className={cx('create-board')}>
      <form>
        <div>
          <div className={cx('create-board-header')}>
            <span>카테고리</span>
            <span>
              {
                BOARD_OPTIONS.find((option) => option.value === boardType)
                  ?.label
              }
            </span>
            <span>
              <Dropdown
                className={cx('options-dropdown')}
                value={boardType}
                trigger={<NavDown />}
                optionComponent={Option}
                optionList={BOARD_OPTIONS}
                height={168}
                rotateTrigger
                onChange={(value) => setBoardType(value as BoardType)}
              />
            </span>
          </div>
          <div className={cx('create-board-title')}>
            <Input
              className={cx('create-input')}
              placeholder="제목을 입력해주세요."
              useInputRef={title}
            />
          </div>
          <div className={cx('error-text')}>
            {title.error && '* 제목은 20자 이하로 해주세요.'}
          </div>
        </div>

        <div className={cx('content-editor')}>
          <TextEditor maxLength={3000} />
        </div>

        <div className={cx('hashtag-input')}>
          <div>
            <span className={cx('hashtag-input-title')}>#해시태그 입력</span>
          </div>
          <div className={cx('hashtag-input-body')}>
            <HashTagInput tagList={chosenTagList} onChange={setChosenTagList} />
          </div>
        </div>

        <div className={cx('create-button')}>
          <Button
            className={cx('button-gray')}
            link="/"
            content="취소"
            size="sm"
            type="button"
            width={160}
            height={66}
          />
          <Button content="게시글 등록" width={240} height={66} />
        </div>
      </form>
    </main>
  );
};

export default CreateBoard;
