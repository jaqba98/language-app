import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { storeMock } from '@english-learning/fe-store';
import { TaskMarkerComponent } from './task-marker.component';

const meta: Meta<TaskMarkerComponent> = {
  component: TaskMarkerComponent,
  title: 'fe/ui/business/task/task-marker',
  decorators: [
    moduleMetadata({
      providers: [storeMock],
    }),
  ],
};
export default meta;
type Story = StoryObj<TaskMarkerComponent>;

export const Blocked: Story = {
  args: {
    taskId: '1',
  },
};

export const Active: Story = {
  args: {
    taskId: '2',
  },
};

export const Done: Story = {
  args: {
    taskId: '3',
  },
};
