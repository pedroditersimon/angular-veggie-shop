import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterModule, PageLayoutComponent]
})
export class HomeComponent {
  hint = "";

  constructor(private route: ActivatedRoute) {
    this.hint = this.route.snapshot.data["hint"];
  }

}
