import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() btnClick = new EventEmitter();
  showResume!: boolean;

  constructor(private uiService: UiService) {}

  onClick() {
    this.btnClick.emit(this.toggleRes());
  }

  toggleRes() {
    this.uiService.toggleProjects();
  }
}
