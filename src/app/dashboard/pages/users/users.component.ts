import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  host: { 'data-component': 'users' },
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {}
