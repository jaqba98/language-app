import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ActivatedRoute } from '@angular/router';
import { ButtonTextComponent } from './button-text.component';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'Control/ButtonText',
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
    value: 'Click me!',
    fullWidth: false,
  },
};
