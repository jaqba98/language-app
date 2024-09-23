import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { MainNavFormComponent } from './main-nav-form.component';

const meta: Meta<MainNavFormComponent> = {
  component: MainNavFormComponent,
  title: 'fe/ui/form/main-nav-form',
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
  decorators: [
    moduleMetadata({
      providers: [{ provide: ActivatedRoute, useValue: [] }],
    }),
  ],
};
export default meta;
type Story = StoryObj<MainNavFormComponent>;

export const Default: Story = {};
