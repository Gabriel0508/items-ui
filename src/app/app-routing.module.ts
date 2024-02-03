import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ComponentsModule } from './components/components.module';

const routes: Routes = [
  { path: '',  component: LandingPageComponent},
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes), ComponentsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
