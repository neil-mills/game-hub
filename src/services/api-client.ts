import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd258cca283ae456db5cc9f04ecc6e729',
  },
});
