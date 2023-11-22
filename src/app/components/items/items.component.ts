import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/core/models/product.model';
import { select, Store } from '@ngrx/store';
import * as fromProducts from '../../state/product/index';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  products$: Observable<IProduct[]> | undefined;
  isLoading$: Observable<boolean> | undefined;

  displayedColumns: string[] = ['Id', 'Name', 'Description', 'Price', 'Brand'];

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }

  onCreateProduct(product: IProduct[]): void {
    // this.store.dispatch(
    //   fromProducts.createProduct({
    //     product: {
    //       //TODO:  create a product
    //     },
    //   })
   // );
  }

  private initDispatch(): void {
    this.store.dispatch(fromProducts.getProducts());
  }

  private initSubscriptions(): void {
    this.products$ = this.store.pipe(select(fromProducts.selectProductList));
    this.isLoading$ = this.store.pipe(
      select(fromProducts.selectProductIsLoading)
    );
  }
}
