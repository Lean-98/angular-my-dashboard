import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent {
  public menuItems = routes
    .map((router) => router.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':')); //

  constructor() {
    // const dashboardRoutes = routes
    //   .map((router) => router.children ?? [])
    //   .flat()
    //   .filter((route) => route && route.path)
    //   .filter((route) => !route.path?.includes(':')); // Exclude routes with parameters
    // console.log(dashboardRoutes);
  }
}
