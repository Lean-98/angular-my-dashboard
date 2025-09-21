import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  host: { 'data-component': 'users' },
  standalone: true,
  imports: [CommonModule, RouterModule, TitleComponent],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  public usersService = inject(UserService);
}
