import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildMetaFullScreen,
  buildMetaModuleMetaData,
  buildStoryDarkMode,
  buildStoryLightMode,
  buildStoryTemplate,
} from '@english-learning/fe-utils';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

const meta: Meta<CourseComponent> = {
  component: CourseComponent,
  title: 'fe/page/dashboard/course',
  ...buildMetaFullScreen(),
  ...buildMetaModuleMetaData(
    CourseService.getStorybookImports(),
    CourseService.getStorybookProviders(),
  ),
};
export default meta;
type Story = StoryObj<CourseComponent>;

export const DashboardLight: Story = {
  ...buildStoryLightMode(),
  ...buildStoryTemplate(CourseService.getTemplate()),
};

export const DashboardDark: Story = {
  ...buildStoryDarkMode(),
  ...buildStoryTemplate(CourseService.getTemplate()),
};
