import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '@shared/title/title.component';
import type { User } from '../../../interfaces/req-response.interface';
import { UserService } from '@services/user.service';
import { switchMap } from 'rxjs';

@Component({
  host: { 'data-component': 'user' },
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()"></app-title>
    @if (user()) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />
      <div>
        <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
        <p>{{ user()?.email }}</p>
      </div>
    </section>
    } @else {
    <p>Cargando información...</p>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `${this.user()!.first_name} ${this.user()!.last_name}`;
    }
    return 'Información del usuario';
  });

  // De Observable a Signal
  // constructor() {
  //   this.route.params.subscribe((params) => {
  //     console.log({ params });
  //   });
  // }
}
