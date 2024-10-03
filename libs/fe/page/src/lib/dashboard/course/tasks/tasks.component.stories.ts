import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

import { storeMock } from '@english-learning/fe-store';
import { TasksComponent } from './tasks.component';

const meta: Meta<TasksComponent> = {
  component: TasksComponent,
  title: 'fe/page/dashboard/course/tasks',
  decorators: [moduleMetadata({ providers: [storeMock] })],
  argTypes: {
    event: { action: 'event' },
  },
};
export default meta;
type Story = StoryObj<TasksComponent>;

export const Default: Story = {};
