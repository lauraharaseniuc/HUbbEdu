import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class9-aplicatii',
  imports: [],
  templateUrl: './class9-aplicatii.html',
  styleUrl: './class9-aplicatii.scss',
})
export class Class9Aplicatii {
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
