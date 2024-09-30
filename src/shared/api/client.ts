import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { backendBaseUrl } from '~/shared/config';
import { tokenStorage } from '~/shared/libs';

export const AXIOS_INSTANCE = Axios.create({ baseURL: backendBaseUrl });

AXIOS_INSTANCE.interceptors.request.use((config) => {
  const token = tokenStorage.getToken();

  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(
    ({ data }) => data,
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled by Vue Query');
  };

  return promise;
};

export default customInstance;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ErrorType<Error> extends AxiosError<Error> {}
