import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

import { storeMock } from '@english-learning/fe-store';
import { TaskRoadmapComponent } from './task-roadmap.component';

const meta: Meta<TaskRoadmapComponent> = {
  component: TaskRoadmapComponent,
  title: 'fe/ui/business/task/task-roadmap',
  decorators: [moduleMetadata({ providers: [storeMock] })],
  argTypes: {
    event: { action: 'event' },
  },
};
export default meta;
type Story = StoryObj<TaskRoadmapComponent>;

export const Default: Story = {};
