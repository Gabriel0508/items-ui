import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ItemsComponent } from './components/items/items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductStoreModule } from './state/product/product-state.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, ItemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    ProductStoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
