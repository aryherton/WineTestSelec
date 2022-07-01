import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import CardProduct from '../components/CardProduct';
import SearchByPrice from '../components/SearchByPrice';

import { HomeWrapper } from '../styles/pages/Home';
import { getArr } from '../services/api';
import Url from '../help/Url';
import { setProducts } from '../store/slice/productSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const getData = useCallback(async () => {
    const arrProduct = await getArr(Url.ENDPOINT);

    dispatch(setProducts(arrProduct));
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <HomeWrapper>
      <Header />
      <main>
        <SearchByPrice />
        <CardProduct />
      </main>
    </HomeWrapper>
  )
}

export default Home;
