import { Component } from '@angular/core';
import { PageLayoutComponent } from "./layouts/page-layout/page-layout.component";
import { RouterModule } from '@angular/router';

// locale
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { LOCALE_ID } from '@angular/core';

// Registrar la localización en español de Argentina
registerLocaleData(localeEsAr, 'es-AR');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [PageLayoutComponent, RouterModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },  // Usar es-AR como la localización predeterminada
  ],
})
export class AppComponent { }
