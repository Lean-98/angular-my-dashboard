import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  host: { 'data-component': 'user' },
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {}
