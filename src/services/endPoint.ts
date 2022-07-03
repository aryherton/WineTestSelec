export const URL_LOGIN_DB_WINE = 'http://localhost:3005/login';
export const URL_REGISTER_USER = 'http://localhost:3005/login/register';
export const URL_PRODUCT_DB_WINE = 'http://localhost:3005/product';

export default function GetEndPoint(pages: number) {
  return `/products?page=${pages}&limit=10`;
}