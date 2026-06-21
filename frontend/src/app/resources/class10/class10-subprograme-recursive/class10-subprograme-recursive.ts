import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class10-subprograme-recursive',
  imports: [],
  templateUrl: './class10-subprograme-recursive.html',
  styleUrl: './class10-subprograme-recursive.scss',
})
export class Class10SubprogrameRecursive {
  readonly subject: 'informatica' | 'tic' = 'informatica';

  constructor(private dialog: MatDialog) {}

  generateActivity(activityText: string) {
    this.dialog.open(ActivityPaperModalComponent, {
      data: { activityText, subject: this.subject },
      width: '760px',
      maxWidth: '95vw',
    });
  }
}
