import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ButtonTextComponent } from './button-text.component';
import { ActivatedRoute } from '@angular/router';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'Control/ButtonText',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] }
      ]
    })
  ]
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

export const Primary: Story = {
  args: {
    value: 'Click me!',
    fullWidth: false,
  },
};
