import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildBaseStory,
  buildMetaEventAction,
  buildMetaModuleMetaData,
} from '@english-learning/fe-utils';
import { storeMock } from '@english-learning/fe-store';
import { TaskRoadmapComponent } from './task-roadmap.component';

const meta: Meta<TaskRoadmapComponent> = {
  component: TaskRoadmapComponent,
  title: 'fe/ui/business/task/task-roadmap',
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([], [storeMock]),
};
export default meta;
type Story = StoryObj<TaskRoadmapComponent>;

export const TaskRoadmapLight: Story = buildBaseStory(true, {});
export const TaskRoadmapDark: Story = buildBaseStory(false, {});
