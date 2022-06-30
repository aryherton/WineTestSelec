import { useEffect, useCallback, useState } from 'react';

import Header from '../components/Header';
import { HomeWrapper } from '../styles/pages/Home';
import { getArr } from '../services/api';
import Url from '../help/Url';

const Home: React.FC = () => {
  const [product, setProduct] = useState('');
  const data = useCallback(async () => {
    const arrProduct = await getArr(Url.ENDPOINT);
    setProduct(arrProduct);
  }, []);
  console.log(product);
  useEffect(() => {
    data();
  }, [data]);

  return (
    <HomeWrapper>
      <Header />
      <main>
      </main>
    </HomeWrapper>
  )
}

export default Home;
