import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ButtonAdd from './ButtonAdd';
import { MainPageProductWrapper } from '../styles/components/MainPageProduct';

import IProduct from '../interface/IProduct';

export default function MainPageProduct() {
  const [product, setProduct] = useState<IProduct>();
  const { productForPage } = useSelector((state: any) => state.products);
  
  useEffect(() => {
    if (productForPage) {
        setProduct(productForPage);
    }
  }, [productForPage]);

  return (
    <MainPageProductWrapper>
      <section>
        <img
          id="vinhos"
          src={ product && product.image }
          alt="image"
        />
      </section>
      <aside>
        <div id="infoName">
          <span id="country">
            Vinhos
            <span className="iconMaiorq">{'>'}</span>
            { product && product.country }
            <span className="iconMaiorq">{'>'}</span>
            <span id="nameRegion">{ product && product.region }</span>
          </span>
          <span id="productName">{ product && product.name }</span>
        </div>
        <div id="infoProduct">
          <img id="miniImgRegion" src={ product && product.flag } alt="imgRegion" />
          <span>{ product && product.country }</span>
          <span>{ product && product.type }</span>
          <span>{ product && product.classification }</span>
          <span>{ product && product.size }</span>
        </div>
        <div id="divPrice">
          <span id="priceSocio">
            <h1 id="textSimb">R$</h1>
            { product && product.priceMember }
          </span>
          <span id="priceNoSocio">
          <h1>NÃO SÓCIO R${ product && product.priceNonMember }/UN.</h1>
          </span>
        </div>
        <div id="comentarioSomelier">
          <span id="titelComentario">Comentário do Sommelier</span>
          <pre id="textComentario">{ product && product.sommelierComment }</pre>
        </div>
        <ButtonAdd idP={ product && +product.id } />
      </aside>
    </MainPageProductWrapper>
  );
}