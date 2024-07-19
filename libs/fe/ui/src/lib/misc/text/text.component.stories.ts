import { Meta, StoryObj } from "@storybook/angular";

import { TextComponent } from "./text.component";

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: 'Misc/Text',
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Paragraph: Story = {
  args: {
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis, felis sed vestibulum dignissim, quam turpis semper nisi, sit amet cursus sapien dui id nulla. Aliquam sagittis lorem et dignissim maximus. Sed dapibus magna ut augue pharetra, venenatis aliquam ex cursus. Duis tempus ipsum vel rhoncus consequat. Phasellus elementum eleifend velit sit amet dictum. Nunc dapibus in turpis ut convallis. Pellentesque pellentesque lacinia elit, ut vehicula turpis pellentesque ut. Quisque gravida lorem eleifend, vehicula ligula eu, facilisis risus.',
    type: 'paragraph',
  },
};

export const Header1: Story = {
  args: {
    value: 'Lorem ipsum',
    type: 'header1',
  },
};

export const Header2: Story = {
  args: {
    value: 'Lorem ipsum',
    type: 'header2',
  },
};
