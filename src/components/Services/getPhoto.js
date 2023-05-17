import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '33826929-2876bca68a673fc535a8a1f73';

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`
    ${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);

  return data;
};
