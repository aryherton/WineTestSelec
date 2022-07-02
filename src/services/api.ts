import axios from 'axios';

import GetEndPoint from '../services/endPoint';

const api = axios.create({
  baseURL: `http://wine-back-test.herokuapp.com`,
});

export const getArr = async (endpoint: string) => {
  const data = await api.get(endpoint)
    .then((resp) => resp.data);

  return data;
};

export const getArrAll = async () => {
  const endPoint = GetEndPoint(1);
  const data = await getArr(endPoint);
  const { totalPages } = data;
  const arrEndPoint: string[] = [];
  
  for (let index = 0; index < totalPages; index += 1) {
    arrEndPoint.push(GetEndPoint(index + 1));
  }

  const arrProductsAll = await Promise.all(arrEndPoint
      .map((endPoint: string) => getArr(endPoint))
    );
  
  return arrProductsAll.reduce((acc, { items }) => acc = [...acc, ...items], []);
};

export default api;