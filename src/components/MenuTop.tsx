import Image from 'next/image';

import { MenuTopWrapper } from '../styles/components/MenuTop';
import lupa from '../images/buscaLupa.png';
import conta from '../images/conta.png';
import winebox from '../images/winebox.png';

export default function MenuTop() {
  return (
    <MenuTopWrapper id="divMenuTop">
      <ul id="ulMenuTop">
        <li>
          <Image
            src={lupa}
            alt="lupaIcon"
          />
        </li>
        <li>
          <Image
            src={conta}
            alt="contaIcon"
          />
        </li>
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