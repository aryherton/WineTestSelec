import axios from 'axios';

import GetEndPoint from '../services/endPoint';

import IProduct from '../interface/IProduct';
import IUser from '../interface/IUser';
import ICart from '../interface/ICart';

const api = axios.create({
  baseURL: `http://wine-back-test.herokuapp.com`,
});

export const getArr = async (endPoint: string) => {
  const data = await api.get(endPoint)
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
  
  const arr: IProduct[] = arrProductsAll.reduce((acc, { items }) => acc = [...acc, ...items], []);

  return arr;
};

export const loginAndRegister = async (endPoint: string, body: IUser) => {
  const { data } = await api.post(endPoint, body);
  
  return data.token;
}

export const setProduct = async (endPoint: string, body: ICart[], token: string) => {
  api.defaults.headers.common['Authorization'] = token;
  await api.post(endPoint, body);
}

export const getProduct = async (endPoint: string, token: string) => {
  api.defaults.headers.common['Authorization'] = token;
  const cartProduct = api.get(endPoint);

  return cartProduct;
}

export default api;