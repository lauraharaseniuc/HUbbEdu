import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class10-greedy',
  imports: [],
  templateUrl: './class10-greedy.html',
  styleUrl: './class10-greedy.scss',
})
export class Class10Greedy {
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
