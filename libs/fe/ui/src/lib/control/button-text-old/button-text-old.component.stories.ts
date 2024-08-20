import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { ButtonTextOldComponent } from './button-text-old.component';

const meta: Meta<ButtonTextOldComponent> = {
  component: ButtonTextOldComponent,
  title: 'fe/ui/control/button-text-old',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<ButtonTextOldComponent>;

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
