import { Component } from '@angular/core';

import { CourseService } from './course.service';

@Component({
  selector: 'lib-course',
  standalone: true,
  imports: CourseService.getImports(),
  templateUrl: './course.component.html',
})
export class CourseComponent {}
