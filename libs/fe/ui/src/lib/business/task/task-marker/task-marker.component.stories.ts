import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

import { storeMock } from '@english-learning/fe-store';
import { TaskMarkerComponent } from './task-marker.component';

const meta: Meta<TaskMarkerComponent> = {
  component: TaskMarkerComponent,
  title: 'fe/ui/business/task/task-marker',
  decorators: [moduleMetadata({ providers: [storeMock] })],
  argTypes: {
    event: { action: 'event' },
  },
};
export default meta;
type Story = StoryObj<TaskMarkerComponent>;

export const Blocked: Story = {
  args: { taskId: 'task1' },
};

export const Active: Story = {
  args: { taskId: 'task2' },
};

export const Done: Story = {
  args: { taskId: 'task3' },
};
