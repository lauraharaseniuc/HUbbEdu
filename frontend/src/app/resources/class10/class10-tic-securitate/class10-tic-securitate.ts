import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class10-tic-securitate',
  imports: [],
  templateUrl: './class10-tic-securitate.html',
  styleUrl: './class10-tic-securitate.scss',
})
export class Class10TicSecuritate {
  readonly subject: 'informatica' | 'tic' = 'tic';

  constructor(private dialog: MatDialog) {}

  generateActivity(activityText: string) {
    this.dialog.open(ActivityPaperModalComponent, {
      data: { activityText, subject: this.subject },
      width: '760px',
      maxWidth: '95vw',
    });
  }
}
