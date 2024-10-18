import { Component } from '@angular/core';

import { CardComponent, TextComponent } from '@english-learning/fe-component';

@Component({
  selector: 'lib-courses',
  standalone: true,
  imports: [CardComponent, TextComponent],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {}
