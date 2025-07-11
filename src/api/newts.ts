import axios from 'axios';

const ACCESS_KEY = 'j6d_hDKtfGYN-hpAegrOVS0HZuDhcTkBK9d5LUtMX7w';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchImages = async (query: string): Promise<unknown> => {
  const response = await axiosInstance.get('/search/photos', {
    params: {
      query,
    },
  });
  console.log(response);
  return response.data;
};

export default axiosInstance;
