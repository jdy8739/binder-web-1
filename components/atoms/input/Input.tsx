import classNames from 'classnames/bind';

import { ReactElement } from 'react';
import style from './Input.module.scss';
import { UseInputType } from '/business/hook/useInput';

const cx = classNames.bind(style);

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  //
  useInputRef?: UseInputType;
}

const Input = ({ className, useInputRef, ...rest }: Props) => {
  return (
    <span className={cx('input-wrapper', className)}>
      <label className={cx('input-label')}>
        <input
          className={cx('input-target')}
          type="text"
          onChange={(e) => {
            if (useInputRef) {
              useInputRef.changeValue(e.target.value);
            }
          }}
          value={useInputRef?.value}
          {...rest}
        />
      </label>
    </span>
  );
};

export default Input;
