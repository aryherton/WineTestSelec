import Image from 'next/image';

import NavBar from './NavBar';
import MenuTop from './MenuTop';
import { HeaderWrapper } from '../styles/components/Header';
import Logo from '../images/logo.png';

export default function Header() {
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