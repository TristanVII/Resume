import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project';
import { PROJECTS } from '../../mock-projects';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent {
  @Input() project!: Project;
}
