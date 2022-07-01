import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';

export default function CardProduct() {
const { products: { items: arrProd } } = useSelector((state: any) => state.products);

return (
  <div>
    {arrProd
      ? (arrProd.map((product, key) => {
      return (
        <div id="cardProduct" key={product.id}>
          <div id="imgWineFlag">
            <div id="imgWines">
              <img src={product.image} alt="img_wine"
              />
            </div>
            <div id="flag">
                <img src={product.flag} alt="flag_country" />
            </div>
          </div>
          <div id="nameWine">
              <p>{product.name}</p>
          </div>
          <div id="valuePrice">
              <span id="price">{product.price}</span>
              <span id="discount">{product.discount}</span>
          </div>
          <div id="textSocioPrice">
              <span id="textSocio">SÓCIO WINE</span>
              <span id="priceMember">R$ {product.priceMember}</span>
          </div>
          <div id="textNonMemberPrice">
              <span id="nonMember">NÃO SÓCIO</span>
              <span id="priceNonMember">R$ {product.priceNonMember}</span>
          </div>
          <input id="buttonCard" type="button" value="ADICIONAR" />
        </div>
      );
    }))
    : (<Loading />)}
  </div>
);
}