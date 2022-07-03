import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setLengthCart, subLengthCart } from '../store/slice/productSlice';

import ICard from '../interface/ICard';
import { ButtonAddWrapper } from '../styles/components/ButtonAdd';

export default function ButtonAdd({ idP }) {
  const dispatch = useDispatch();
  const [token, setToken] = useState<string>('');

  const addProductCart = (idP: number) => {
    let arrIdProduct: ICard[] = [];
    const getCart = localStorage.getItem('Cart');

    if (getCart) {
      arrIdProduct = JSON.parse(getCart);
      const arrTmp = arrIdProduct.reduce((acc: ICard[], product: ICard, _index: number, arr: ICard[]) => {
        if (+product.idProduct === +idP) {
          product.qtd = product.qtd + 1;
          acc.push(product);

          return acc;
        } if (arr.some((obj) => obj.idProduct === idP)) {
          acc.push(product);
          
          return acc;
        }
        acc = [...arr, { idProduct: idP, qtd: 1}];
        dispatch(setLengthCart(1));

        return acc;
      }, []);
      
      localStorage.setItem('Cart', JSON.stringify(arrTmp));
    } else {
      arrIdProduct = [{idProduct: idP, qtd: 1}];
      localStorage.setItem('Cart', JSON.stringify(arrIdProduct));
    }
  };

  const subProductCart = (idP: number) => {
    let arrIdProduct: ICard[] = [];
    const getCart = localStorage.getItem('Cart');

    if (getCart) {
      arrIdProduct = JSON.parse(getCart);
      const arrTmp = arrIdProduct.reduce((acc: ICard[], product: ICard, _index: number, arr: ICard[]) => {
        if (+product.idProduct === +idP) {
          product.qtd = product.qtd - 1;
          if (product.qtd < 1) {
            dispatch(subLengthCart(1));
            
            return acc;
          }
          acc.push(product);

          return acc;
        }

        acc.push(product);

        return acc;
      }, []);
      
      if (arrTmp.length) {
        localStorage.setItem('Cart', JSON.stringify(arrTmp));
      } else {
        localStorage.removeItem('Cart');
      }
    } else {
      arrIdProduct = [{idProduct: idP, qtd: 0}];
      localStorage.setItem('Cart', JSON.stringify(arrIdProduct));
    }
  };

  useEffect(() => {
    const stringToken = localStorage.getItem('Token');

    if (stringToken) {
      setToken(stringToken);
    }
    
  }, []);

  return (
    <ButtonAddWrapper>
      <div id="addSubProduct">
        <button
          className="imgAddSub"
          onClick={ () => { (token && idP) && subProductCart(idP); } }
        >
          -
        </button>
        <span id="imgQtdProduct">0</span>
        <button
          className="imgAddSub"
          onClick={ () => { (token && idP) && addProductCart(idP); } }>
            +
        </button>
      </div>
      <span id="buttonAdd">Adicionar</span>
    </ButtonAddWrapper>
  );
}