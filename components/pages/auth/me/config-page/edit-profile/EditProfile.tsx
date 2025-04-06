'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import style from './EditProfile.module.scss';
import { IconEdit, ProfileBig } from '/assets/svg';
import Input from '/components/atoms/input/Input';
import Button from '/components/atoms/button/Button';
import Select from '/components/atoms/select/Select';
import Dropdown from '/components/atoms/dropdown/Dropdown';
import { OptionProps } from '/components/atoms/option/Option';
import HashTagInput from '/components/atoms/hashtag-input/HashTagInput';

const cx = classNames.bind(style);

const EditProfile = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-image')}>
        <div>
          <ProfileBig
            className={cx('profile-svg')}
            width={102}
            height={100}
            viewBox="0 0 65 65"
            x="0px"
            y="0px"
          />
          <IconEdit />
        </div>
      </div>
      <div className={cx('wrapper-content')}>
        <div className={cx('wrapper-form')}>
          <div className={cx('form-element')}>
            <label>
              이메일<span>*</span>
            </label>
            <Input
              placeholder="이메일"
              className={cx('require', 'input-text')}
            />
          </div>
          <div className={cx('form-element')}>
            <label>
              이름<span>*</span>
            </label>
            <Input placeholder="이름" className={cx('require', 'input-text')} />
          </div>
          <div className={cx('form-element')}>
            <label>
              닉네임<span>*</span>
            </label>
            <Input
              placeholder="닉네임"
              className={cx('require', 'input-text')}
            />
          </div>
          <div className={cx('form-element')}>
            <label>소속</label>
            <Dropdown
              className={cx('options-dropdown')}
              trigger={
                <Input
                  readOnly
                  placeholder="소속을 선택해주세요"
                  className={cx('input-text')}
                />
              }
              //   effect="rolling"
              value="0"
              height={300}
              //   optionComponent={OptionComponent}
              optionList={[
                {
                  value: 0,
                  label: 'Options',
                },
                {
                  value: 1,
                  label: 'Options',
                },
                {
                  value: 2,
                  label: 'Options',
                },
                {
                  value: 3,
                  label: 'Options',
                },
                {
                  value: 4,
                  label: 'Options',
                },
                {
                  value: 5,
                  label: 'Options',
                },
                {
                  value: 6,
                  label: 'Options',
                },
                {
                  value: 7,
                  label: 'Options',
                },
              ]}
            />
          </div>
          <div className={cx('form-element')}>
            <label>총 경력</label>
            <Dropdown
              className={cx('options-dropdown')}
              trigger={
                <Input
                  readOnly
                  placeholder="경력을 선택해주세요"
                  className={cx('input-text')}
                />
              }
              //   effect="rolling"
              value="0"
              height={300}
              //   optionComponent={OptionComponent}
              optionList={[
                {
                  value: 0,
                  label: 'Options',
                },
                {
                  value: 1,
                  label: 'Options',
                },
                {
                  value: 2,
                  label: 'Options',
                },
                {
                  value: 3,
                  label: 'Options',
                },
                {
                  value: 4,
                  label: 'Options',
                },
                {
                  value: 5,
                  label: 'Options',
                },
                {
                  value: 6,
                  label: 'Options',
                },
                {
                  value: 7,
                  label: 'Options',
                },
              ]}
            />
          </div>
          <div className={cx('form-element')}>
            <label>한 줄 소개</label>
            <textarea
              className={cx('text-field')}
              placeholder="본인을 알릴 수 있는 짧은 소개글을 작성해보세요."
            />
            <p className={cx('text-field-count')}>0/100</p>
          </div>
          <div className={cx('form-element')}>
            <label>관심 태그</label>
            <HashTagInput
              tagList={[]}
              onChange={() => {}}
              className={cx('hash-tag-input')}
            />
          </div>
        </div>
        <div className={cx('gray-click')}>
          <Link href="/">회원 탈퇴</Link>
        </div>
      </div>
      <div>
        <Button>수정 완료</Button>
      </div>
    </div>
  );
};

export default EditProfile;
