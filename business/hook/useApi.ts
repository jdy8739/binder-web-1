'use client';

import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ApiResponseInterface } from '../models/models';

const requestPost = async <T>(
  uri: string,
  data?,
  config?: AxiosRequestConfig,
): Promise<ApiResponseInterface<T>> => {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + uri,
      data,
      config,
    );
    return { ...res.data, code: res.status };
  } catch (e) {
    if (e instanceof AxiosError) {
      return { ...e.response?.data, code: e.response?.status };
    }
  }
  return { data: null, error: null, code: 404 };
};

export { requestPost };
