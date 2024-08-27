import { type Meta, type StoryObj } from '@storybook/angular';

import { QuizFormComponent } from './quiz-form.component';

const meta: Meta<QuizFormComponent> = {
  component: QuizFormComponent,
  title: 'fe/ui/form/quiz-form',
  argTypes: {
    quizFormEvent: {
      action: 'quizFormEvent',
    },
  },
};
export default meta;
type Story = StoryObj<QuizFormComponent>;

export const Default: Story = {};
