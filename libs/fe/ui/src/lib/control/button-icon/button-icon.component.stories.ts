import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonIconComponent } from './button-icon.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonIconComponent> = {
  component: ButtonIconComponent,
  title: 'ButtonIconComponent',
};
export default meta;
type Story = StoryObj<ButtonIconComponent>;

export const Primary: Story = {
  args: {
    src: '',
    alt: '',
    fullWidth: false,
  },
};

export const Heading: Story = {
  args: {
    src: '',
    alt: '',
    fullWidth: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button-icon works!/gi)).toBeTruthy();
  },
};
