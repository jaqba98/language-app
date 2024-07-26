import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ActivatedRoute } from '@angular/router';
import { ButtonIconComponent } from './button-icon.component';

const meta: Meta<ButtonIconComponent> = {
  component: ButtonIconComponent,
  title: 'Control/ButtonIcon',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<ButtonIconComponent>;

export const Primary: Story = {
  args: {
    src: 'icon/menu.svg',
    alt: 'hamburger icon',
    fullWidth: false,
  },
};
