import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Control/Button',
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
