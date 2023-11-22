import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product.model';
import * as data from '../../../assets/api/products.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = {...data};

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    //return of(this.products);

    const data = this.http.get<IProduct[]>('../../../assets/api/products.json')
    console.log(data);
    
    return data;
  }

  createProduct(product: IProduct): Observable<IProduct> {
    this.products = [...this.products, product];
    return of(product);
  }

  
}
