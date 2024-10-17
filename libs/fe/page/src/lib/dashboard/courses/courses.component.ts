import { Component } from '@angular/core';

import { TextComponent } from '@english-learning/fe-component';
import { CardComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-courses',
  standalone: true,
  imports: [CardComponent, TextComponent],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {}
