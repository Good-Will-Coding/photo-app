import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID f2fec403442d5a7e35b5e970df29c60d59afea4be75377d1c16fac11bae3a987"
      }
});