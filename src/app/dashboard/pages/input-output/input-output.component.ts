import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  type OnDestroy,
} from '@angular/core';
import { interval, take, tap } from 'rxjs';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import type { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  public products = signal<Product[]>([
    { id: 1, name: 'Product 1', quantity: 0 },
    { id: 2, name: 'Product 2', quantity: 0 },
  ]);

  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      take(7)
    )
    .subscribe();

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  public updateProduct(product: Product, quantity: number): void {
    this.products.update((products) =>
      products.map((p) => (p.id === product.id ? { ...p, quantity } : p))
    );
  }
}
