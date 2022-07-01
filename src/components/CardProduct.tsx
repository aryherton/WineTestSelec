import React from 'react';
import { useSelector } from 'react-redux';

import Loading from './Loading';
import { CardProductWrapper } from '../styles/components/CardProduct';

export default function CardProduct() {
const { products: { items: arrProd } } = useSelector((state: any) => state.products);

return (
  <CardProductWrapper>
    <p>49 produtos encontrados</p>
    <div id="mainProduct">
      {arrProd
        ? (arrProd.map((product, key) => {
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
              <input id="buttonCard" type="button" value="ADICIONAR" />
            </div>
          </div>
        );
      }))
      : (<Loading />)}
    </div>
  </CardProductWrapper>
);
}