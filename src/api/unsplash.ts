import axios from 'axios';
import { UnsplashSearchResponse } from '../types/unsplash';

const ACCESS_KEY = 'j6d_hDKtfGYN-hpAegrOVS0HZuDhcTkBK9d5LUtMX7w';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 10
): Promise<UnsplashSearchResponse> => {
  const response = await unsplash.get<UnsplashSearchResponse>(
    '/search/photos',
    {
      params: {
        query,
        page,
        per_page: perPage,
      },
    }
  );
  console.log(response);
  return response.data;
};

export default unsplash;
