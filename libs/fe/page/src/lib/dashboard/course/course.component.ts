import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-course',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './course.component.html',
})
export class CourseComponent {}
