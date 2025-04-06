'use client';

import { useState } from 'react';

interface UseInputProps {
  defaultValue?: string;
  maxLength?: number;
  minLength?: number;
  onError?: () => void;
}
const useInput = ({
  defaultValue,
  maxLength,
  minLength,
  onError,
}: UseInputProps) => {
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState(false);
  const changeValue = (data: string) => {
    if (maxLength && data.length > maxLength) {
      setError(true);
      if (onError) onError();
    } else if (minLength && data.length < minLength) {
      setError(true);
      if (onError) onError();
    } else {
      setError(false);
      setValue(data);
    }
  };

  return { value, changeValue, error };
};

export default useInput;
export type UseInputType = ReturnType<typeof useInput>;
