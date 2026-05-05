import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class9-prezentari-digitale',
  imports: [],
  templateUrl: './class9-prezentari-digitale.html',
  styleUrl: './class9-prezentari-digitale.scss',
})
export class Class9PrezentariDigitale {
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
