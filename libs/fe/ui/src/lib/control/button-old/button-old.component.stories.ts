import { ActivatedRoute } from '@angular/router';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ButtonOldComponent } from './button-old.component';

const meta: Meta<ButtonOldComponent> = {
  component: ButtonOldComponent,
  title: 'fe/ui/control/button-old',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<ButtonOldComponent>;

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
