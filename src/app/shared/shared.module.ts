import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [HeaderComponent],
})
export class SharedModule {}
