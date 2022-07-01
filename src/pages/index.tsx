import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import CardProduct from '../components/CardProduct';
import SearchByPrice from '../components/SearchByPrice';
import Search from '../components/Search';

import { HomeWrapper } from '../styles/pages/Home';
import { getArr } from '../services/api';
import GetEndPoint from '../services/endPoint';
import { setProducts } from '../store/slice/productSlice';

const Home: React.FC = () => {
  const statusSearch = useSelector((state: any) => state.products.checkSearch);
  const numPage = useSelector((state: any) => state.products.pages);
  
  const dispatch = useDispatch();
  const END_POINT = GetEndPoint(numPage);
  const getData = useCallback(async () => {
    const arrProduct = await getArr(END_POINT);

    dispatch(setProducts(arrProduct));
  }, [numPage]);

  useEffect(() => {
    getData();
  }, [getData, numPage]);

  return (
    <HomeWrapper>
      { statusSearch && <Search /> }
      <Header />
      <main>
        <SearchByPrice />
        <CardProduct />
      </main>
    </HomeWrapper>
  )
}

export default Home;
