import { Meta, StoryObj } from '@storybook/angular';

import { TextComponent } from './text.component';
import { TextEnum } from './text.enum';

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: 'fe/ui/misc/text',
  argTypes: {
    textType: {
      options: Object.values(TextEnum),
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Paragraph: Story = {
  args: {
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis, felis sed vestibulum dignissim, quam turpis semper nisi, sit amet cursus sapien dui id nulla. Aliquam sagittis lorem et dignissim maximus. Sed dapibus magna ut augue pharetra, venenatis aliquam ex cursus. Duis tempus ipsum vel rhoncus consequat. Phasellus elementum eleifend velit sit amet dictum. Nunc dapibus in turpis ut convallis. Pellentesque pellentesque lacinia elit, ut vehicula turpis pellentesque ut. Quisque gravida lorem eleifend, vehicula ligula eu, facilisis risus.',
    textType: TextEnum.paragraph,
  },
};

export const Header1: Story = {
  args: {
    value: 'Header1',
    textType: TextEnum.header1,
  },
};

export const Header2: Story = {
  args: {
    value: 'Header2',
    textType: TextEnum.header2,
  },
};
