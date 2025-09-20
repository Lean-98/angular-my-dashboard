import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

@Component({
  host: { 'data-component': 'control-flow' },
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Solid']);
  public frameworks2 = signal([]);

  public toggleContent(): void {
    this.showContent.update((current) => !current);
  }
}
