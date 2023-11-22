import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './product.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './product.effects';

//Here we will register book feature store with respective reducers and effects.
@NgModule({
  imports: [
    StoreModule.forFeature('product', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
})
export class ProductStoreModule {}
