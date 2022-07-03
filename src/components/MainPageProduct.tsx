import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ButtonAdd from './ButtonAdd';

import IProduct from '../interface/IProduct';

import deVolta from '../images/deVolta.png';

export default function MainPageProduct() {
  const [product, setProduct] = useState<IProduct>();
  const { productForPage } = useSelector((state: any) => state.products);
  
  useEffect(() => {
    if (productForPage) {
        setProduct(productForPage);
    }
  }, [productForPage]);

  return (
    <div>
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
            <img src={ deVolta } alt="min_img" />
            { product && product.country }
            <img src={ deVolta } alt="min_img" />
            { product && product.region }
          </span>
          <span>{ product && product.name }</span>
        </div>
        <div id="infoProduct">
          <img src={ product && product.flag } alt="imgRegion" />
          <span>{ product && product.country }</span>
          <span>{ product && product.type }</span>
          <span>{ product && product.classification }</span>
          <span>{ product && product.size }</span>
        </div>
        <div id="divPrice">
          <span id="priceSocio">
            R$
            { product && product.priceMember }
          </span>
          <span id="priceNoSocio">
          <h1>NÃO SÓCIO R${ product && product.priceNonMember }/UN.</h1>
          </span>
        </div>
        <div id="comentarioSomelier">
          <span>Comentário do Sommelier</span>
          <pre>{ product && product.sommelierComment }</pre>
        </div>
        <ButtonAdd />
      </aside>
    </div>
  );
}