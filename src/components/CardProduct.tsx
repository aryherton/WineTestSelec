import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Loading from './Loading';

import { CardProductWrapper } from '../styles/components/CardProduct';
import ButtonPagination from '../components/ButtonPagination';

import IProduct from '../interface/IProduct';
import ICart from '../interface/ICart';
import { URL_PRODUCT_DB_WINE } from '../services/endPoint';

import { getArrAll } from '../services/api';
import { setLengthCart } from '../store/slice/productSlice';
import { setProductForPage } from '../store/slice/productSlice';
import { setProduct } from '../services/api';

export default function CardProduct() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [token, setToken] = useState<string | null>(null);
  const [arrProd = [], setArrProd] = useState([]);
  const items = useSelector((state: any) => state.products.products);
  const { filterArrProducts } = useSelector((state: any) => state.products);

  const setProductDbMongo = (cartProduct: ICart[]) => {
    if (token) {
      setProduct(URL_PRODUCT_DB_WINE, cartProduct, token);
    }
  }
  
  const changeArrProducts = () => {
    if (filterArrProducts.length) {
      setArrProd(filterArrProducts);
    } if (items && !filterArrProducts.length) {
      setArrProd(items.items);
    }
  };

  const addProductCart = (idP: number) => {
    let arrIdProduct: ICart[] = [];
    const getCart = localStorage.getItem('Cart');

    if (getCart) {
      arrIdProduct = JSON.parse(getCart);
      const arrTmp = arrIdProduct.reduce((acc: ICart[], product: ICart, _index: number, arr: ICart[]) => {
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

      const arr = localStorage.getItem('Cart');

      if(arr) {
        const arrCart = JSON.parse(arr);
        setProductDbMongo(arrCart);
      } else {
        setProductDbMongo([]);
      }
    } else {
      arrIdProduct = [{idProduct: idP, qtd: 1}];
      localStorage.setItem('Cart', JSON.stringify(arrIdProduct));
      dispatch(setLengthCart(1));

      const arr = localStorage.getItem('Cart');

      if(arr) {
        const arrCart = JSON.parse(arr);
        setProductDbMongo(arrCart);
      } else {
        setProductDbMongo([]);
      }
    }
  };

  const getQtdProduct = async () => {
    const arrAllProducts = await getArrAll();
    const lengthFil = filterArrProducts.length;
    const lengthProd = arrAllProducts.length;

    filterArrProducts.length ? setTotalProducts(lengthFil) : setTotalProducts(lengthProd);
  };

  const routerForPageProduct = (product) => {
    dispatch(setProductForPage(product));
    router.push('/Product');
  }
  
  useEffect(() => {
    setToken(localStorage.getItem('Token'));
    changeArrProducts();
    getQtdProduct();
  }, [filterArrProducts, items]);
  
  return (
    <CardProductWrapper>
      <p>{ totalProducts } produtos encontrados</p>
      <div id="mainProduct">
        {arrProd.length
          ? (arrProd.map((product: IProduct, key) => {
            return (
              <div id="cardProduct" key={product.id}>
                <div id="dataPorduct">
                  <a id="linkPageProduct" onClick={ () => routerForPageProduct(product) }>
                    <div id="imgWineFlag">
                      <div id="imgWines">
                        <img src={product.image} alt="img_wine" />
                      </div>
                      <div id="flag">
                          <img src={product.flag} alt="flag_country" />
                      </div>
                    </div>
                    <div id="nameWine">
                        <p>{product.name}</p>
                    </div>
                  </a>
                  <div id="valuePrice">
                      <span id="price">R${product.price}</span>
                      <span id="discount">{product.discount}% OFF</span>
                  </div>
                  <div id="textSocioPrice">
                      <span id="textSocio">SÓCIO WINE</span>
                      <span id="priceMember">R$ {product.priceMember}</span>
                  </div>
                  <div id="textNonMemberPrice">
                      <span id="nonMember">NÃO SÓCIO</span>
                      <span id="priceNonMember">R$ {product.priceNonMember}</span>
                  </div>
                </div>
                <div id="divButton">
                  <input
                    id="buttonCard"
                    type="button"
                    value="ADICIONAR"
                    onClick={ () => {
                      token && addProductCart(+product.id);
                    } }
                    />
                </div>
              </div>
            );
        })): <Loading /> }
        <ButtonPagination />
      </div>
    </CardProductWrapper>
  );
}