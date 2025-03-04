import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/Theme.service';
import { Theme } from 'src/app/types/types';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/Cart.service';
import { IconCartComponent } from "../../icons/icon-cart.component";
import { IconBarsComponent } from "../../icons/icon-bars.component";
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-options',
  standalone: true,
  imports: [CommonModule, IconCartComponent, IconBarsComponent],
  templateUrl: './navbar-options.component.html',
  styleUrls: ['./navbar-options.component.css']
})
export class NavbarOptionsComponent {
  @ViewChild('navbarHamburger', { static: false }) hamburgerRef!: ElementRef;

  isHamburgerMenuOpened = false;
  isDesktop = true;

  // mostar el carrito solo en la paginas de shop
  get showCartBtn(): boolean {
    return this.router.url.startsWith("/shop");
  }

  get itemsCount(): number {
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
    private themesService: ThemeService
  ) {
    this.checkWindowSize();
  }


  @HostListener('document:click', ['$event'])
  onGlobalClick(event: MouseEvent): void {
    // cancelar
    if (this.isDesktop || !this.isHamburgerMenuOpened || !this.hamburgerRef) return;

    const insideHamburgerClick = this.hamburgerRef.nativeElement.contains(event.target);

    // Clic fuera del contenedor
    if (!insideHamburgerClick) {
      this.isHamburgerMenuOpened = false;
    }
  }

  @HostListener("window:resize")
  private checkWindowSize() {
    this.isDesktop = window.innerWidth > 680;
    this.isHamburgerMenuOpened = this.isDesktop;
  }

  toggleCartPanel() {
    this.cartService.showCartPanel = !this.cartService.showCartPanel;
  }

  toggleHamburgerMenu(event?: Event) {
    event?.stopPropagation();
    this.isHamburgerMenuOpened = !this.isHamburgerMenuOpened;
  }

  onThemeSelectorChange(event: Event) {
    const selectElement = event.currentTarget as HTMLSelectElement;
    const selectedTheme = selectElement.value;
    this.themesService.setTheme(selectedTheme as Theme);
  }

}
