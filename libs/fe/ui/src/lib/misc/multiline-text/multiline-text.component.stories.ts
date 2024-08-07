import { Meta, StoryObj } from '@storybook/angular';

import { MultilineTextComponent } from './multiline-text.component';

const meta: Meta<MultilineTextComponent> = {
  component: MultilineTextComponent,
  title: 'fe/ui/misc/multiline-text',
};
export default meta;
type Story = StoryObj<MultilineTextComponent>;

export const Paragraph: Story = {
  args: {
    lines: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
};
