import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildBaseStory,
  buildMetaEventAction,
  buildMetaFullScreen,
  buildMetaModuleMetaData,
  buildStoryTemplate,
} from '@english-learning/fe-utils';
import { TasksComponent } from './tasks.component';
import { TasksService } from './tasks.service';

const meta: Meta<TasksComponent> = {
  component: TasksComponent,
  title: 'fe/page/dashboard/course/tasks',
  ...buildMetaFullScreen(),
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData(
    TasksService.getStorybookImports(),
    TasksService.getStorybookProviders(),
  ),
};
export default meta;
type Story = StoryObj<TasksComponent>;

export const TaskRoadmapLight: Story = {
  ...buildBaseStory(true, {}),
  ...buildStoryTemplate(TasksService.getTemplate()),
};
export const TaskRoadmapDark: Story = {
  ...buildBaseStory(false, {}),
  ...buildStoryTemplate(TasksService.getTemplate()),
};
