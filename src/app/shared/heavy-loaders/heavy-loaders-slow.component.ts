import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: ` <section [ngClass]="['w-full h-[600px]', cssClass]"></section> `,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoadersSlowComponent loaded');
    const start: any = new Date();
    while (Date.now() - start < 3000) {}
    console.log('Cargado ...');
  }
}
