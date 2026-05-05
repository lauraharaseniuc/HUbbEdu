import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class9-interfete',
  standalone: true,
  imports: [],
  templateUrl: './class9-interfete.component.html',
  styleUrl: './class9-interfete.component.scss'
})
export class Class9InterfeteComponent {
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
