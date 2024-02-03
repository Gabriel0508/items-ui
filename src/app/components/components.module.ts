import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsComponent } from './items/items.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    ItemsComponent,
    ItemsDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [LandingPageComponent, ItemsComponent, ItemsDetailsComponent]
})
export class ComponentsModule { }
