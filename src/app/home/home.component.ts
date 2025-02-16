import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hint = "";

  constructor(private route: ActivatedRoute) {
    this.hint = this.route.snapshot.data["hint"];
  }

}
