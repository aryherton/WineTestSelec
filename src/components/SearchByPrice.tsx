import { useDispatch } from 'react-redux';

import { SearchByPriceWrapper } from '../styles/components/SearchPrice';

import IProduct from '../interface/IProduct';
import { getArrAll } from '../services/api';
import { setFilterArrProducts } from '../store/slice/productSlice';

export default function SearchByPrice() {
  const dispatch = useDispatch();
  const getValueRadio = async ({ target }) => {
    const valueRadio = +target.value;
    const arrAll: IProduct[] = await getArrAll();

    switch(valueRadio) {
      case 1:
        const arr1 = arrAll.filter((obj) => obj.price < 41);
          dispatch(setFilterArrProducts(arr1));
        break;
      case 2:
        const arr2 = arrAll.filter((obj) => obj.price < 61 && obj.price > 39 );
          dispatch(setFilterArrProducts(arr2));
        break;
      case 3:
        const arr3 = arrAll.filter((obj) => obj.price < 201 && obj.price > 59);
          dispatch(setFilterArrProducts(arr3));
        break;
      case 4:
        const arr4 = arrAll.filter((obj) => obj.price < 501 && obj.price > 199);
          dispatch(setFilterArrProducts(arr4));
        break;
      default:
        const arr5 = arrAll.filter((obj) => obj.price > 499);
          dispatch(setFilterArrProducts(arr5));
    }
  }

  return (
    <SearchByPriceWrapper>
      <div id="divSpanSearchPrice">
        <span id="textRefineBusca">Refine sua busca</span>
        <span id="textPorPreco">Por preço</span>
      </div>
      <div id="divUlSearchPrice">
        <ul id="ulSearchPrice">
          <li>
            <input
              type="radio"
              name="searchPrice"
              id="ate40"
              value="1"
              onClick={ getValueRadio }
            />
            <label htmlFor="ate40">Até R$40</label>
          </li>
          <li>
            <input
              type="radio"
              name="searchPrice"
              id="40a60" value="2"
              onClick={ getValueRadio }
            />
            <label htmlFor="40a60">R$40 A R$60</label>
          </li>
          <li>
            <input
              type="radio"
              name="searchPrice"
              id="60a200" value="3"
              onClick={ getValueRadio }
            />
            <label htmlFor="60a200">R$60 A R$200</label>
          </li>
          <li>
            <input
              type="radio"
              name="searchPrice"
              id="200a500"
              value="4"
              onClick={ getValueRadio }
            />
            <label htmlFor="200a500">R$200 A R$500</label>
          </li>
          <li>
            <input
              type="radio"
              name="searchPrice"
              id="acimaDe500"
              value="5"
              onClick={ getValueRadio }
            />
            <label htmlFor="acimaDe500">R$500</label>
          </li>
        </ul>
      </div>
    </SearchByPriceWrapper>
  );
}