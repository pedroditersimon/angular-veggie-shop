import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-minus',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  `,
})
export class IconMinusComponent { }
