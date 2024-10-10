import type { Meta, StoryObj } from '@storybook/angular';

import { RouterOutlet } from '@angular/router';
import {
  buildActivatedRouteProvider,
  buildMetaFullScreen,
  buildMetaModuleMetaData,
  buildStoryDarkMode,
  buildStoryLightMode,
  buildStoryTemplate,
} from '@english-learning/fe-utils';
import { DashboardNavComponent } from '@english-learning/fe-ui';
import { CourseComponent } from './course.component';

const meta: Meta<CourseComponent> = {
  component: CourseComponent,
  title: 'fe/page/dashboard/course',
  ...buildMetaFullScreen(),
  ...buildMetaModuleMetaData(
    [DashboardNavComponent, RouterOutlet],
    [buildActivatedRouteProvider()],
  ),
};
export default meta;
type Story = StoryObj<CourseComponent>;

const template = `
  <lib-dashboard-nav></lib-dashboard-nav>
  <router-outlet></router-outlet>
`;

export const DashboardLight: Story = {
  ...buildStoryLightMode(),
  ...buildStoryTemplate(template),
};

export const DashboardDark: Story = {
  ...buildStoryDarkMode(),
  ...buildStoryTemplate(template),
};
