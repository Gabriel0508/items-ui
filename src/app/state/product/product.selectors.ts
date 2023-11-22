import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductState } from './product.model';

//Selectors fetch data from the store and return it as an observable.
export const selectProductState =
  createFeatureSelector<IProductState>('product');
export const selectProductList = createSelector(
  selectProductState,
  (state) => state.products
);
export const selectProductIsLoading = createSelector(
  selectProductState,
  (state) => state.isLoading
);
