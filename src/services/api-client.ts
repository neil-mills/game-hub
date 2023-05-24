import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '34af426120a04646bcd22682b7886f9c',
  },
});
