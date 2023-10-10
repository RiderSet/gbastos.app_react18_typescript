import axios from 'axios';
import { responseInterceptor } from '../axios-config/interceptors/responseInterceptor';
import { errorInterceptor } from '../axios-config/interceptors/errorInterceptor';
import { Environment } from '../../../environment';


const Api = axios.create({
  baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };