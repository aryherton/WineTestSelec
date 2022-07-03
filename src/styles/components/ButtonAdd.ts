import styled from 'styled-components';

export const ButtonAddWrapper = styled.div`
  width: 328px;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  background-color: #7EBC43;
  color: #FFFFFF;

  #addSubProduct {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    #imgQtdProduct {
      height: 100%;
      font-size: 24px;
      line-height: 42px;
      padding-top: 8px;
    }

    .imgAddSub {
      width: 24px;
      height: 24px;
      border: solid 1px;
      border-radius: 24px;
      border-color: #FFFFFF;
      background-color: transparent;
      cursor: pointer;
      color: #FFFFFF;
    }
  }

  #buttonAdd {
    border: none;
    background-color: transparent;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    text-align: center;
    cursor: pointer;
  }
`;