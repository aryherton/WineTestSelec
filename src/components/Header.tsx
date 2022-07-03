import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Image from 'next/image';

import NavBar from './NavBar';
import MenuTop from './MenuTop';
import { HeaderWrapper } from '../styles/components/Header';
import Logo from '../images/logo.png';
import productSlice from '../store/slice/productSlice';

export default function Header() {
  const qtdStorageCart = useSelector((state: any) => state.products.lengthCart);

  useEffect(() => {
    console.log('test');
    
  }, [qtdStorageCart]);

  return (
    <HeaderWrapper>
      <div id="logo_wine">
        <Image
          src={Logo}
          alt="logo_marca"
        />
      <NavBar />
      </div>
      <MenuTop />
    </HeaderWrapper>
  );
}