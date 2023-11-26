import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  collapsed: boolean = true;
  showFade: boolean = false; // make it working on mobile

  onToggleMenu(): void {
    this.collapsed = !this.collapsed;
    this.showFade = !this.showFade;
  }
}
