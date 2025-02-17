import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css'],
  standalone: true,
  imports: [RouterModule, PageLayoutComponent]
})
export class NotFoundPageComponent {

}
