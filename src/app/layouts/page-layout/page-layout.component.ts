import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { CartPanelComponent } from "../../shared/cart/cart-panel/cart-panel.component";

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
  standalone: true,
  imports: [NavbarComponent, CartPanelComponent],
})
export class PageLayoutComponent {

}
