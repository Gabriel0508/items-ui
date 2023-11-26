import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss'],
})
export class GenericCardComponent {
  product: IProduct[] | undefined;

  @Input() id: number = -1;
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() brand: string = '';
  @Input() price: number = -1;
  @Output() favoriteProduct = new EventEmitter<number>();
  @Output() cartProduct = new EventEmitter<number>();

  onCartAdd(): void {
    this.cartProduct.emit(this.id);
  }

  onFavoriteAdd(): void {
    this.favoriteProduct.emit(this.id);
  }
}
