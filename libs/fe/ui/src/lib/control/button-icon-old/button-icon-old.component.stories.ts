import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { ButtonIconOldComponent } from './button-icon-old.component';

const meta: Meta<ButtonIconOldComponent> = {
  component: ButtonIconOldComponent,
  title: 'fe/ui/control/button-icon-old',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<ButtonIconOldComponent>;

export const Primary: Story = {
  args: {
    src: 'icon/menu.svg',
    alt: 'hamburger icon',
    fullWidth: false,
  },
};

export const FullWidth: Story = {
  args: {
    src: 'icon/menu.svg',
    alt: 'hamburger icon',
    fullWidth: true,
  },
};
