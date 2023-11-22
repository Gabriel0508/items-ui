import { IProduct } from '../../core/models/product.model';

//This will hold the interface of products store.
export interface IProductState {
  products: IProduct[];
  isLoading: boolean;
}
