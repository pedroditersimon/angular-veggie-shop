import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app-routing';
import { provideHotToastConfig } from '@ngneat/hot-toast';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(routes, withComponentInputBinding()),
      provideHotToastConfig({ position: "top-center" }),
    ]
  }
);
