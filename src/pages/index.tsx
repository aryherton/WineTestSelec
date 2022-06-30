import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
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
  
  const { products } = useSelector((state: any) => state.products);
  console.log('Global', products.items,'Global');
  

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <HomeWrapper>
      <Header />
      <main>
      </main>
    </HomeWrapper>
  )
}

export default Home;
