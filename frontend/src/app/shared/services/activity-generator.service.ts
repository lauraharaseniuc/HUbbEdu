import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ActivityGeneratorService {
  constructor(private http: HttpClient) {}

  generate(activityText: string, subject: 'informatica' | 'tic' = 'informatica'): Observable<string> {
    return this.http
      .post<{ content: string }>('/api/generate-activity', { activityText, subject })
      .pipe(
        map(res => res.content),
        catchError(err => throwError(() => err))
      );
  }
}
