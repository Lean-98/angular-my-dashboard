import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  host: { 'data-component': 'change-detection' },
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection.component.html',
  styles: ``,
})
export default class ChangeDetectionComponent {}
