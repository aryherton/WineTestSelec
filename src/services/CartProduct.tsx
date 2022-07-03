import ICart from '../interface/ICart';
import { useDispatch } from 'react-redux';

import { setLengthCart } from '../store/slice/productSlice';

export const AddProductInCard = (idP: number) => {
  const dispatch = useDispatch();
  let arrIdProduct: ICart[] = [];
  const getCart = localStorage.getItem('Cart');

  if (getCart) {
    arrIdProduct = JSON.parse(getCart);
    const arrTmp = arrIdProduct.reduce((acc: ICart[], product: ICart, _index: number, arr: ICart[]) => {
      if (+product.idProduct === +idP) {
        product.qtd = product.qtd + 1;
        acc.push(product);
  
        return acc;
      } if (arr.some((obj) => obj.idProduct === idP)) {
        acc.push(product);
        
        return acc;
      }
      acc = [...arr, { idProduct: idP, qtd: 0}];
      dispatch(setLengthCart(1));
  
      return acc;
    }, []);
    
    localStorage.setItem('Cart', JSON.stringify(arrTmp));
    } else {
      arrIdProduct = [{idProduct: idP, qtd: 0}];
      localStorage.setItem('Cart', JSON.stringify(arrIdProduct));
    }
}