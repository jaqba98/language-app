import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { ButtonTextComponent } from './button-text.component';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'fe/ui/control/button-text',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

export const Primary: Story = {
  args: {
    value: 'Hello',
    fullWidth: false,
  },
};

export const FullWidth: Story = {
  args: {
    value: 'Hello',
    fullWidth: true,
  },
};
