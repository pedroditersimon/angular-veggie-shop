import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-cross',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  `,
})
export class IconCrossComponent { }
