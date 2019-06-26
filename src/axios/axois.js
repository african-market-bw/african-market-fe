import axios from 'axios';
import axiosRetry from 'axios-retry';

const axoisInstance = axios.create({
  baseURL: 'https://amarketplace.herokuapp.com/api/',
});

axiosRetry(axoisInstance, { retries: 2 });

export default axoisInstance;
