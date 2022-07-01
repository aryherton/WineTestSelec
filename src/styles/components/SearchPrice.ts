import styled from 'styled-components';

export const SearchByPriceWrapper = styled.div`
  width: 25%;
  height: 310px;
  padding-left: 30px;
  padding-top: 20px;

  #divSpanSearchPrice {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-items: center;
    margin-bottom: 20px;
    width: 100%;
    height: 20%;

    #textRefineBusca {
      color: #000000;
      font-size: 20px;
      font-weight: bolder;
    }

    #textPorPreco {
      font-size: 18px;
      color: #333333;
      font-weight: bolder;
    }
  }

  #divUlSearchPrice {
    display: flex;
    width: 249px;
    height: 150px;

    label {
      padding-left: 10px;
    }
    
    ul {
      list-style: none;
      color: #1D1D1B;
      font-size: 14px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;