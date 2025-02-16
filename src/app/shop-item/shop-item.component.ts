import {
  Component,
  Input as RouteParam
} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent {
  @RouteParam("id") itemId = "";

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/shop']);
  }
}
