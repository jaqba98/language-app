import { Meta, StoryObj } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Control/Button',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    fullWidth: false,
  },
};
