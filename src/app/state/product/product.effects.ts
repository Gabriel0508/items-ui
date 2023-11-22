import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/core/services/product.service';
import * as fromProducts from './index';
import { map, switchMap } from 'rxjs';
import { IProduct } from 'src/app/core/models/product.model';

//Here we will manage all side effects from action dispatching. In our case we will be calling the products service to manipulate the data.
@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProducts.getProducts.type),
      switchMap(() => this.productService.getProducts()),
      map((products: IProduct[]) =>
        fromProducts.getProductsSuccess({ products })
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProducts.createProduct),
      switchMap(({ product }) => this.productService.createProduct(product)),
      map((product: IProduct) => fromProducts.createProductSuccess({ product }))
    )
  );
}
