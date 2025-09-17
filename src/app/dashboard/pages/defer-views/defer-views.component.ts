import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  host: { 'data-component': 'defer-views' },
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer-views.component.html',
  styles: ``,
})
export default class DeferViewsComponent {}
