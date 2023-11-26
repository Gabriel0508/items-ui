import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { MatCardModule } from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [HeaderComponent, GenericCardComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [HeaderComponent, GenericCardComponent],
})
export class SharedModule {}
