import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-plus',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  `,
  styles: [
    `
      svg {
        width: 20px;
        height: 20px;
        color: #4caf50;
      }
    `,
  ],
})
export class IconPlusComponent { }
