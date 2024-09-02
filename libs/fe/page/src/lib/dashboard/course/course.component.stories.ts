import type { Meta, StoryObj } from '@storybook/angular';

import { CourseComponent } from './course.component';

const meta: Meta<CourseComponent> = {
  component: CourseComponent,
  title: 'fe/page/course',
};
export default meta;
type Story = StoryObj<CourseComponent>;

export const Default: Story = {};
