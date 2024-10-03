import Axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { StatusCodes } from 'http-status-codes';

import { tokenStorage } from '~/shared/auth';
import { AppRoute, browserHistory } from '~/shared/router';

import { backendBaseUrl } from './config';

export const apiClient = Axios.create({ baseURL: backendBaseUrl });

const setAuthorizationHeader = (config: InternalAxiosRequestConfig) => {
  const token = tokenStorage.getToken();

  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleUnauthorizedError = (error: any) => {
  if (error.response?.status === StatusCodes.UNAUTHORIZED) {
    tokenStorage.dropToken();
    browserHistory.push(AppRoute.Login);
  }

  return Promise.reject(error);
};

apiClient.interceptors.request.use(setAuthorizationHeader);
apiClient.interceptors.response.use(
  (response) => response,
  handleUnauthorizedError,
);

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = apiClient({ ...config, cancelToken: source.token }).then(
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
