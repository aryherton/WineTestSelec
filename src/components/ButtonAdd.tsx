import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setLengthCart, subLengthCart } from '../store/slice/productSlice';
import { setProduct } from '../services/api';
import { URL_PRODUCT_DB_WINE } from '../services/endPoint';

import ICart from '../interface/ICart';
import { ButtonAddWrapper } from '../styles/components/ButtonAdd';

export default function ButtonAdd({ idP }) {
  const dispatch = useDispatch();
  const [qtdProductCart, setQtdProductCart] = useState<number>(0);
  const [token, setToken] = useState<string>('');

  const setProductDbMongo = (cartProduct: ICart[]) => {
    setProduct(URL_PRODUCT_DB_WINE, cartProduct, token);
  }

  const addProductCart = (idP: number) => {
    let arrIdProduct: ICart[] = [];
    const getCart = localStorage.getItem('Cart');

    if (getCart) {
      arrIdProduct = JSON.parse(getCart);
      const arrTmp = arrIdProduct.reduce((acc: ICart[], product: ICart, _index: number, arr: ICart[]) => {
        if (+product.idProduct === +idP) {
          product.qtd = product.qtd + 1;
          setQtdProductCart(qtdProductCart + 1);
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

      const arr = localStorage.getItem('Cart');

      if(arr) {
        const arrCart = JSON.parse(arr);
        setProductDbMongo(arrCart);
      } else {
        setProductDbMongo([]);
      }

    } else {
      arrIdProduct = [{idProduct: idP, qtd: 1}];
      setQtdProductCart(1);
      localStorage.setItem('Cart', JSON.stringify(arrIdProduct));

      const arr = localStorage.getItem('Cart');

      if(arr) {
        const arrCart = JSON.parse(arr);
        setProductDbMongo(arrCart);
      } else {
        setProductDbMongo([]);
      }
    } 
  };

  const subProductCart = (idP: number) => {
    let arrIdProduct: ICart[] = [];
    const getCart = localStorage.getItem('Cart');

    if (getCart) {
      arrIdProduct = JSON.parse(getCart);
      const arrTmp = arrIdProduct.reduce((acc: ICart[], product: ICart, _index: number, arr: ICart[]) => {
        if (+product.idProduct === +idP) {
          product.qtd = product.qtd - 1;
          setQtdProductCart(qtdProductCart - 1);

          if (product.qtd < 1) {
            dispatch(subLengthCart(1));
            setQtdProductCart(0);
            
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

        const arr = localStorage.getItem('Cart');

        if(arr) {
          const arrCart = JSON.parse(arr);
          setProductDbMongo(arrCart);
        } else {
          setProductDbMongo([]);
        }

      } else {
        localStorage.removeItem('Cart');

        const arr = localStorage.getItem('Cart');

        if(arr) {
          const arrCart = JSON.parse(arr);
          setProductDbMongo(arrCart);
        } else {
          setProductDbMongo([]);
        }
      }
    } else {
      arrIdProduct = [{idProduct: idP, qtd: 0}];
      localStorage.setItem('Cart', JSON.stringify(arrIdProduct));

      const arr = localStorage.getItem('Cart');

      if(arr) {
        const arrCart = JSON.parse(arr);
        setProductDbMongo(arrCart);
      } else {
        setProductDbMongo([]);
      }
    }
  };

  const getQtdProductCart = () => {
    const reqStorCart = localStorage.getItem('Cart');
    const qtd = reqStorCart && JSON.parse(reqStorCart);
    
    if (qtd && idP) {
      const checkProduct = qtd.filter((obj: ICart) => +obj.idProduct === +idP)
      checkProduct.length && setQtdProductCart(checkProduct[0].qtd);
      
    } else {
      setQtdProductCart(0);
    }
  }

  useEffect(() => {
    const stringToken = localStorage.getItem('Token');

    if (stringToken) {
      setToken(stringToken);
      getQtdProductCart();
    }
    
  }, [qtdProductCart, idP]);

  return (
    <ButtonAddWrapper>
      <div id="addSubProduct">
        <button
          className="imgAddSub"
          onClick={ () => { (token && idP) && subProductCart(idP); } }
        >
          -
        </button>
        <span id="imgQtdProduct">{ qtdProductCart }</span>
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