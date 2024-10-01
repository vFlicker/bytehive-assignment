import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';

import { backendBaseUrl } from '~/shared/config';
import { browserHistory, tokenStorage } from '~/shared/libs';
import { AppRoute } from '~/shared/router';

export const AXIOS_INSTANCE = Axios.create({ baseURL: backendBaseUrl });

AXIOS_INSTANCE.interceptors.request.use((config) => {
  const token = tokenStorage.getToken();

  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === StatusCodes.UNAUTHORIZED) {
      tokenStorage.dropToken();
      browserHistory.push(AppRoute.Login);
    }

    return Promise.reject(error);
  },
);

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
