import { Component } from '@angular/core';

import { CardComponent, TextComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-course',
  standalone: true,
  imports: [CardComponent, TextComponent],
  templateUrl: './course.component.html',
})
export class CourseComponent {}
