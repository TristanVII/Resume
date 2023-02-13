import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showProjects: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  // Toggle the projects
  toggleProjects(): void {
    this.showProjects = !this.showProjects;
    this.subject.next(this.showProjects);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
