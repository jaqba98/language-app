import { ActivatedRoute } from '@angular/router';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'fe/ui/control/button',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    fullWidth: false,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};
