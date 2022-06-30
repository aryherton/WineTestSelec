import axios from 'axios';

const api = axios.create({
  baseURL: `http://wine-back-test.herokuapp.com`,
});

export const getArr = async (endpoint: string) => {
  const data = await api.get(endpoint)
    .then((resp) => resp.data);

    return data;
};

export default api;