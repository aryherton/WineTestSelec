import { NavBarWrapper } from '../styles/components/NavBar';

export default function NavBar() {
  return (
    <NavBarWrapper id="divNavBar">
      <ul id="ulNavBar">
        <li>Clube</li>
        <li>Loja</li>
        <li>Produtores</li>
        <li>Ofertas</li>
        <li>Eventos</li>
      </ul>
    </NavBarWrapper>
  );
}