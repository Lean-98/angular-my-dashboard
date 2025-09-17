import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  host: { 'data-component': 'control-flow' },
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(false);

  public toggleContent(): void {
    this.showContent.update((current) => !current);
  }
}
