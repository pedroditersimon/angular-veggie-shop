import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";
import { CartService } from 'src/app/services/cart.service';
import { VeggetablesService } from 'src/app/services/veggetables.service';
import { VegetableType } from 'src/app/types/types';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, PageLayoutComponent]
})
export class ShopComponent {
  veggetables: Array<VegetableType> = [];

  constructor(private veggetablesService: VeggetablesService) {
    this.veggetables = veggetablesService.vegetables;
  }
}
