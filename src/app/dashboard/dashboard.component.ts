import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// *Alias de importaciones
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
  host: { 'data-component': 'dashboard' },
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export default class DashboardComponent {}
