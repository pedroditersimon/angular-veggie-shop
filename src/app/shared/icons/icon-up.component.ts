import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-up',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  `,
  styles: [
    `
      :host {
        width: 20px;
        height: 20px;
        color: #4caf50;
      }
    `,
  ],
})
export class IconUpComponent { }
