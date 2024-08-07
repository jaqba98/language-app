import { Meta, StoryObj } from '@storybook/angular';

import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'fe/ui/misc/header',
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Paragraph: Story = {
  args: {
    value: 'Hello world',
    textType: 'header1',
  },
};
