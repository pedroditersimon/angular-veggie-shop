import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-bars',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  `,
})
export class IconBarsComponent { }
