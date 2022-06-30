import Link from 'next/link';

import { NavBarWrapper } from '../styles/components/NavBar';

export default function NavBar() {
  return (
    <NavBarWrapper id="divNavBar">
      <ul id="ulNavBar">
        <Link href="/">
          <a>
            <li>Clube</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li>Loja</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li>Produtores</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li>Ofertas</li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li>Eventos</li>
          </a>
        </Link>
      </ul>
    </NavBarWrapper>
  );
}