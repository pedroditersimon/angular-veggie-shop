import {
  Component,
  Input as RouteParam
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";
import { VegetableType } from 'src/app/types/types';
import { VeggetablesService } from 'src/app/services/veggetables.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, PageLayoutComponent]
})
export class ShopItemComponent {
  @RouteParam("id") itemId = "";
  veggetable?: VegetableType;

  constructor(
    private router: Router,
    private veggetableService: VeggetablesService
  ) {

  }

  ngOnInit(): void {
    this.veggetable = this.veggetableService.getById(Number(this.itemId));
  }

  goBack() {
    this.router.navigate(['/shop']);
  }
}
