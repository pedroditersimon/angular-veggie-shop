import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCartComponent } from "../../icons/icon-cart.component";

@Component({
  selector: 'app-cart-count-indicator',
  standalone: true,
  imports: [CommonModule, IconCartComponent],
  template: `
    <div
      class="cart-count-indicator rounded badge confirm"
      *ngIf="count !== undefined && count > 0"
    >
      <app-icon-cart />
      <span>
        {{ count }}
      </span>
    </div>
  `,
  styles: [
    `
    .cart-count-indicator {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      margin: 0.25rem;
      padding-left: 0.5rem;
      padding-right: 0.75rem;
    }
    .cart-count-indicator app-icon-cart {
      width: 25px;
      height: 25px;
    }
    .cart-count-indicator span {
      text-align: center;
      font-weight: bold;
    }
    `
  ]
})
export class CartCountIndicatorComponent {
  @Input() count: number | undefined;
}
