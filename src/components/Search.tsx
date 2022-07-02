import React, { useState } from 'react';

import { SearchWrapper } from '../styles/components/Search';

export default function Search() {
  const [searchName, setSearchName] = useState('');

  const getValueSearch = ({target: { value }}) => {
    setSearchName(value);
  }  

  return (
    <SearchWrapper id="inputSearch">
      <input type="text" placeholder="Pesquise pelo nome" onChange={ getValueSearch }/>
    </SearchWrapper>
  );
}