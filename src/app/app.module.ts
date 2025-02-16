import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// locale
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

// Registrar la localización en español de Argentina
registerLocaleData(localeEsAr, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    NotFoundPageComponent,
    NavbarComponent,
    ShopItemComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },  // Usar es-AR como la localización predeterminada
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
