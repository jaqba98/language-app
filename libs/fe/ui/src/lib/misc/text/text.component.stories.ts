import type { Meta, StoryObj } from '@storybook/angular';

import { TextComponent } from './text.component';

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: 'fe/ui/misc/text',
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Tiny: Story = {
  args: {
    value: 'Tiny',
    type: 'tiny',
  },
};

export const Paragraph: Story = {
  args: {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis, felis sed vestibulum dignissim, quam turpis semper nisi, sit amet cursus sapien dui id nulla. Aliquam sagittis lorem et dignissim maximus. Sed dapibus magna ut augue pharetra, venenatis aliquam ex cursus. Duis tempus ipsum vel rhoncus consequat. Phasellus elementum eleifend velit sit amet dictum. Nunc dapibus in turpis ut convallis. Pellentesque pellentesque lacinia elit, ut vehicula turpis pellentesque ut. Quisque gravida lorem eleifend, vehicula ligula eu, facilisis risus.',
  },
};

export const Header1: Story = {
  args: {
    value: 'Header1',
    type: 'header1',
  },
};

export const Header2: Story = {
  args: {
    value: 'Header2',
    type: 'header2',
  },
};

export const Header3: Story = {
  args: {
    value: 'Header3',
    type: 'header3',
  },
};
