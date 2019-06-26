import axois from 'axios';

// axoisRetry(axios)
const axoisAuth = () => {
  const token = localStorage.getItem('userToken');
  return axois.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
};

export default axoisAuth;
