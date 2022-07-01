export default function GetEndPoint(pages: number) {
  return `/products?page=${pages}&limit=10`;
}