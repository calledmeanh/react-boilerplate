/* libs */
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { notification } from 'antd';
/* apps */
import getEnvironment from '../environments/environment';
import { errorMessage } from './message.util';

class Api {
  private axiosInstance: AxiosInstance;
  constructor() {
    const axiosRequestConfig: AxiosRequestConfig = {
      baseURL: getEnvironment().constants.api_domain,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const axiosInstance: AxiosInstance = Axios.create(axiosRequestConfig);

    this.axiosInstance = axiosInstance;
  }

  get(input: { url: string; config?: AxiosRequestConfig }) {
    return this.axiosInstance
      .get(input.url, input.config)
      .then((res) => res)
      .catch((error) => {
        if (error.response) {
          let description: string = error.response.statusText;
          notification.error({ message: errorMessage.BASE, description });
        } else {
          notification.error({
            message: errorMessage.BASE,
            description: errorMessage.CONNECTION,
          });
        }
      });
  }
}

export default new Api();
