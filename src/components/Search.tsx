import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { SearchWrapper } from '../styles/components/Search';

import { setFilterArrProducts } from '../store/slice/productSlice';
import { setPages } from '../store/slice/productSlice';
import { getArrAll } from '../services/api';

import IProduct from '../interface/IProduct';


export default function Search() {
  const [searchName, setSearchName] = useState('');
  const [arrAll, setArrAll] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  const getValueSearch = async ({target: { value }}) => {
    if (value) {
      setSearchName(value);
    } if (!value && searchName.length < 2) {
      setSearchName('');
      dispatch(setPages(1));
    }
  };

  const getArr = useCallback(async () => {
    const arr = await getArrAll();
    
    setArrAll(arr);
  }, []);
  

  useEffect(() => {
    getArr();

    if (arrAll && searchName) {
      const arrFilter = arrAll.filter(({ name }) => name.includes(searchName));

      dispatch(setFilterArrProducts(arrFilter));
    } else {
      dispatch(setFilterArrProducts([]));
    }
  }, [searchName]);

  return (
    <SearchWrapper id="inputSearch">
      <input type="text" placeholder="Pesquise pelo nome" onChange={ getValueSearch }/>
    </SearchWrapper>
  );
}