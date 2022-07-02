import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import { MenuTopWrapper } from '../styles/components/MenuTop';

import lupa from '../images/buscaLupa.png';
import conta from '../images/conta.png';
import winebox from '../images/winebox.png';

import { setCheckSearch } from '../store/slice/productSlice';

export default function MenuTop() {
  const statusSearch = useSelector((state: any) => state.products.checkSearch);
  const dispatch = useDispatch();
  
  const validSearch = async () => {
    const check = statusSearch ? false : true;
    dispatch(setCheckSearch(check));
  };

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
            <li>
              <Image
                src={conta}
                alt="contaIcon"
              />
            </li>
          </a>
        </Link>
        <li id="liWineBox">
          <Image
            id="imgWineBox"
            src={winebox}
            alt="wineBox"
          />
          <div id="qtdWineBox">
            0
          </div>
        </li>
      </ul>
    </MenuTopWrapper>
  );
}