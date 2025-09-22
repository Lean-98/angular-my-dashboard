import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-options-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule],
  templateUrl: './options-bottom-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheetComponent {
  openLink(event: MouseEvent) {
    console.log('openLink', event);
  }
}
