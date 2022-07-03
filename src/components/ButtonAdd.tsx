import { ButtonAddWrapper } from '../styles/components/ButtonAdd';

export default function ButtonAdd() {
  return (
    <ButtonAddWrapper>
      <div id="addSubProduct">
        <button className="imgAddSub"> - </button>
        <span id="imgQtdProduct">0</span>
        <button className="imgAddSub"> + </button>
      </div>
      <button id="buttonAdd">Adicionar</button>
    </ButtonAddWrapper>
  );
}