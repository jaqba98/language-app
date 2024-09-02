import type { Meta, StoryObj } from '@storybook/angular';

import { CoursesComponent } from './courses.component';

const meta: Meta<CoursesComponent> = {
  component: CoursesComponent,
  title: 'fe/page/courses',
};
export default meta;
type Story = StoryObj<CoursesComponent>;

export const Default: Story = {};
