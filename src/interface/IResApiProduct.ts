import IProduct from './IProduct';

export default interface IResApiProducts {
    page: number,
    totalPages: number,
    itemsPerPage: number,
    totalItems: number,
    items: IProduct[],
};