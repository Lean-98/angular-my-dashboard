import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  host: { 'data-component': 'title' },
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styles: ``,
})
export class TitleComponent {}
