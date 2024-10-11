import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildMetaEventAction,
  buildMetaFullScreen,
  buildMetaModuleMetaData,
  buildStoryDarkMode,
  buildStoryLightMode,
  buildStoryTemplate,
} from '@english-learning/fe-utils';
import { TasksComponent } from './tasks.component';
import { TasksService } from './tasks.service';

const meta: Meta<TasksComponent> = {
  component: TasksComponent,
  title: 'fe/page/dashboard/course/tasks',
  ...buildMetaFullScreen(),
  ...buildMetaModuleMetaData(
    TasksService.getStorybookImports(),
    TasksService.getStorybookProviders(),
  ),
};
export default meta;
type Story = StoryObj<TasksComponent>;

export const DashboardLight: Story = {
  ...buildStoryLightMode(),
  ...buildStoryTemplate(TasksService.getTemplate()),
  ...buildMetaEventAction(),
};

export const DashboardDark: Story = {
  ...buildStoryDarkMode(),
  ...buildStoryTemplate(TasksService.getTemplate()),
  ...buildMetaEventAction(),
};
