import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loading from './Loading';

import { CardProductWrapper } from '../styles/components/CardProduct';
import ButtonPagination from '../components/ButtonPagination';

import IProduct from '../interface/IProduct';
import ICard from '../interface/ICard';

import { getArrAll } from '../services/api';
import { setLengthCart } from '../store/slice/productSlice';

export default function CardProduct() {
  const dispatch = useDispatch();
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [token, setToken] = useState<string | null>(null);
  const [arrProd = [], setArrProd] = useState([]);
  const items = useSelector((state: any) => state.products.products);
  const { filterArrProducts } = useSelector((state: any) => state.products);
  
  const changeArrProducts = () => {
    if (filterArrProducts.length) {
      setArrProd(filterArrProducts);
    } if (items && !filterArrProducts.length) {
      setArrProd(items.items);
    }
  };

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
        acc = [...arr, { idProduct: idP, qtd: 0}];
        dispatch(setLengthCart(1));

        return acc;
      }, []);
      
      localStorage.setItem('Cart', JSON.stringify(arrTmp));
    } else {
      arrIdProduct = [{idProduct: idP, qtd: 0}];
      localStorage.setItem('Cart', JSON.stringify(arrIdProduct));
    }
  };

  const getQtdProduct = async () => {
    const arrAllProducts = await getArrAll();
    const lengthFil = filterArrProducts.length;
    const lengthProd = arrAllProducts.length;

    filterArrProducts.length ? setTotalProducts(lengthFil) : setTotalProducts(lengthProd);
  };
  
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