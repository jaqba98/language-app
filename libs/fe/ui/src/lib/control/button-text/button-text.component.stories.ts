import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonTextComponent } from './button-text.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'ButtonTextComponent',
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

export const Primary: Story = {
  args: {
    value: '',
    fullWidth: false,
  },
};

export const Heading: Story = {
  args: {
    value: '',
    fullWidth: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button-text works!/gi)).toBeTruthy();
  },
};
