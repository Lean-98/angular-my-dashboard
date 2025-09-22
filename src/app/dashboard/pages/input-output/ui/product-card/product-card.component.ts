import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import type { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  // !Decorador forma clásica de definir una propiedad de entrada (Input)
  // @Input({ required: true }) product!: Product;

  // !Forma moderna de definir una propiedad de entrada (input)
  public product = input.required<Product>();

  // !Decorador forma clásica de definir una propiedad de salida (Output)
  // @Output() public onIncrementQuantity = new EventEmitter<number>();

  // !Forma moderna de definir una propiedad de salida (output)
  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() => {
    console.log('Product card - effect', this.product().name);
  });
}
