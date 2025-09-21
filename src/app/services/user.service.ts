import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import type {
  User,
  UserResponse,
  UsersResponse,
} from '../interfaces/req-response.interface';
import { map, catchError, throwError, Observable, of, delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: false,
  });
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    console.log('Cargando data...');
    this.getUssers()
      .pipe(delay(1500))
      .subscribe({
        next: (users) => {
          this.#state.set({
            users: users,
            loading: false,
          });
        },
        error: (err) => {
          this.#state.set({
            loading: false,
            users: [],
          });
          console.error('Error al cargar usuarios:', err);
        },
      });
  }

  getUssers(): Observable<any> {
    const url = 'https://reqres.in/api/users';

    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1',
    });

    return this.http.get<UsersResponse>(url, { headers }).pipe(
      map((resp) => {
        console.log('Respuesta de la API:', resp);
        return resp.data;
      }),
      catchError((err: any) => {
        console.log('Error en la petición HTTP');
        return throwError(() => of(err));
      })
    );
  }

  getUserById(id: string): Observable<any> {
    const url = `https://reqres.in/api/users/${id}`;

    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1',
    });

    return this.http.get<UserResponse>(url, { headers }).pipe(
      map((resp) => {
        console.log('Respuesta de la API:', resp);
        return resp.data;
      }),
      catchError((err: any) => {
        console.log('Error en la petición HTTP');
        return throwError(() => of(err));
      })
    );
  }
}
