import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from "../../layouts/page-layout/page-layout.component";
import { IconCheckComponent } from "../../shared/icons/icon-check.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, PageLayoutComponent, IconCheckComponent],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(["/home"]);
  }
}
