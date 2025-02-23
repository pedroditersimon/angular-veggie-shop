import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";
import { IconCartComponent } from "../../shared/icons/icon-cart.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterModule, PageLayoutComponent, IconCartComponent]
})
export class HomeComponent {
  get hint(): string {
    return this.route.snapshot.data["hint"] || "";
  }

  constructor(private route: ActivatedRoute) { }

}
