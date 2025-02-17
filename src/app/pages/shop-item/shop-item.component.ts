import {
  Component,
  Input as RouteParam
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
  standalone: true,
  imports: [RouterModule, PageLayoutComponent]
})
export class ShopItemComponent {
  @RouteParam("id") itemId = "";

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/shop']);
  }
}
