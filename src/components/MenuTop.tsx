import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import { MenuTopWrapper } from '../styles/components/MenuTop';

import lupa from '../images/buscaLupa.png';
import conta from '../images/conta.png';
import winebox from '../images/winebox.png';
import sair from '../images/sair.png'

import { setCheckSearch } from '../store/slice/productSlice';

export default function MenuTop() {
  const [token, setToken] = useState<string>('');
  const [qtdProductCard, setQtdProductCard] = useState<number>(0);
  const { lengthCart } = useSelector((state: any) => state.products);
  const statusSearch = useSelector((state: any) => state.products.checkSearch);
  const dispatch = useDispatch();
  
  const validSearch = async () => {
    const check = statusSearch ? false : true;
    dispatch(setCheckSearch(check));
  };

  const deletedToken = () => {
    localStorage.removeItem('Token');
    setToken('');
  }

  useEffect(() => {
    const checkCart = localStorage.getItem('Cart');
    const keyToken = localStorage.getItem('Token');

    if (checkCart) {
      const arrCart = JSON.parse(checkCart);
       setQtdProductCard(arrCart.length);
    }
    
    if (keyToken) {
      setToken(keyToken);
    }
  }, [token, lengthCart]);

  return (
    <MenuTopWrapper>
      <ul id="ulMenuTop">
        <Link href="">
          <a onClick={ validSearch }>
            <li>
              <Image
                src={lupa}
                alt="lupaIcon"
              />
            </li>
          </a>
        </Link>
        <Link href="/Login">
          <a>
            {
              token
              ? <li onClick={ deletedToken } ><Image src={sair} alt="contaIcon" /></li>
              : <li><Image src={conta} alt="contaIcon" /></li>
            }
          </a>
        </Link>
        <li id="liWineBox">
          <Image
            id="imgWineBox"
            src={winebox}
            alt="wineBox"
          />
          <div id="qtdWineBox">
            { qtdProductCard }
          </div>
        </li>
      </ul>
    </MenuTopWrapper>
  );
}