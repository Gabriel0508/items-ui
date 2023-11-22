import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/core/models/product.model";

const prefix = '[Products]';

//This file will hold all the actions we need to implement the basic CRUD operations.
export const getProducts = createAction(`${prefix} Get Products`);
export const getProductsSuccess = createAction(
    `${getProducts.type} Success`,
    props<{
        products: IProduct[];
    }>()
);

export const createProduct = createAction(
    `${prefix} Create Product`,
    props<{
        product: IProduct;
    }>()
);

export const createProductSuccess = createAction(
    `${createProduct.type} Success`,
    props<{
        product: IProduct;
    }>()
);