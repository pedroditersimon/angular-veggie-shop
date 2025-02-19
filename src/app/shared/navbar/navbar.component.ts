import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class NavbarComponent {
  showCartBtn;

  constructor(private router: Router) {
    // mostar el carrito solo en la paginas de shop
    this.showCartBtn = this.router.url.startsWith("/shop");
  }

}
