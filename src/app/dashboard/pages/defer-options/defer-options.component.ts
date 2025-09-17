import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  host: { 'data-component': 'defer-options' },
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer-options.component.html',
  styles: ``,
})
export default class DeferOptionsComponent {}
