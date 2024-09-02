import type { Meta, StoryObj } from '@storybook/angular';

import { QuizComponent } from './quiz.component';

const meta: Meta<QuizComponent> = {
  component: QuizComponent,
  title: 'fe/page/quiz',
};
export default meta;
type Story = StoryObj<QuizComponent>;

export const Default: Story = {};
