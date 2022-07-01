import { SearchByPriceWrapper } from '../styles/components/SearchPrice';

export default function SearchByPrice() {
  return (
    <SearchByPriceWrapper>
      <div id="divSpanSearchPrice">
        <span>Refine sua busca</span>
        <span>Por preço</span>
      </div>
      <div id="divUlSearchPrice">
        <ul id="ulSearchPrice">
          <li>
            <input type="radio" name="searchPrice" id="ate40" value="1"/>
            <label htmlFor="ate40">Até R$40</label>
          </li>
          <li>
            <input type="radio" name="searchPrice" id="40a60" value="2"/>
            <label htmlFor="40a60">R$40 A R$60</label>
          </li>
          <li>
            <input type="radio" name="searchPrice" id="60a200" value="3"/>
            <label htmlFor="60a200">R$60 A R$200</label>
          </li>
          <li>
            <input type="radio" name="searchPrice" id="200a500" value="4"/>
            <label htmlFor="200a500">R$200 A R$500</label>
          </li>
          <li>
            <input type="radio" name="searchPrice" id="acimaDe500" value="5"/>
            <label htmlFor="acimaDe500">R$500</label>
          </li>
        </ul>
      </div>
    </SearchByPriceWrapper>
  );
}