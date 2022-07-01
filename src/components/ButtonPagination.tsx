import { useDispatch, useSelector } from 'react-redux';
import { setPages } from '../store/slice/productSlice';

import { ButtonPaginationWrapper } from '../styles/components/ButtonPagination';

export default function ButtonPagination() {
  const page = useSelector((state: any) => state.products.pages);
  const products = useSelector((state: any) => state.products.products.items);
  const dispatch = useDispatch();
  const addPages = () => {
    if (products.length-1 > 1) {
      const newPages = page + 1;
      dispatch(setPages(newPages));
    }
  };

  const subtractPages = () => {
    const newPages = page - 1;

    if (newPages >= 1) {
      dispatch(setPages(newPages));
    }

  };

  return (
    <ButtonPaginationWrapper>
      <input id="proximo" type="button" value="Anterior" onClick={subtractPages} />
      <input id="proximo" type="button" value="Próximo" onClick={addPages} />
    </ButtonPaginationWrapper>
  );
}