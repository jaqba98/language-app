import { type Meta, type StoryObj } from '@storybook/angular';

import { QuizComponent } from './quiz.component';

const meta: Meta<QuizComponent> = {
  component: QuizComponent,
  title: 'fe/ui/view/quiz',
};
export default meta;
type Story = StoryObj<QuizComponent>;

export const Primary: Story = {};
