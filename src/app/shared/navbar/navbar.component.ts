import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IconCartComponent } from "../icons/icon-cart.component";
import { CartService } from 'src/app/services/Cart.service';
import { ThemeService } from 'src/app/services/Theme.service';
import { Theme } from 'src/app/types/types';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, IconCartComponent]
})
export class NavbarComponent {
  // mostar el carrito solo en la paginas de shop
  get showCartBtn(): boolean {
    return this.router.url.startsWith("/shop");
  }

  get cartCount(): number {
    return this.cartService.cart.length;
  }

  get currentTheme(): string {
    return this.themesService.getCurrentTheme();
  }

  get themes(): Array<{ key: string, value: string }> {
    return Object.keys(Theme).map(key => ({
      key,
      value: Theme[key as keyof typeof Theme] as string
    }));
  }

  constructor(
    private router: Router,
    private cartService: CartService,
    private themesService: ThemeService,
  ) {

  }

  toggleCartPanel() {
    this.cartService.showCartPanel = !this.cartService.showCartPanel;
  }

  onThemeSelectorChange(event: Event) {
    const selectElement = event.currentTarget as HTMLSelectElement;
    const selectedTheme = selectElement.value;
    this.themesService.setTheme(selectedTheme as Theme);
  }


}
