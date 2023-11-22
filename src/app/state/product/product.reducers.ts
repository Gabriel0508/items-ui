//Reducers are responsible for updating the state. We do it by using pure functions like destructuring.

import { createReducer, on } from '@ngrx/store';
import { IProductState } from './product.model';
import * as fromProducts from './index';

export const initialState: IProductState = {
  products: [],
  isLoading: false,
};

const reducer = createReducer<IProductState>(
  initialState,
  on(fromProducts.getProducts, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromProducts.getProductsSuccess, (state, { products }) => {
    return {
      ...state,
      isLoading: false,
      products,
    };
  }),
  on(fromProducts.createProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromProducts.createProductSuccess, (state, { product }) => {
    return {
      ...state,
      books: [...state.products, product],
      isLoading: false,
    };
  })
);

export function productsReducer(
  state = initialState,
  actions: any
): IProductState {
  return reducer(state, actions);
}
