// I am here
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { LoginFormComponent } from './login-form.component';

const meta: Meta<LoginFormComponent> = {
  component: LoginFormComponent,
  title: 'fe/ui/form/login-form',
  argTypes: {
    event: {
      action: 'event',
    },
  },
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
type Story = StoryObj<LoginFormComponent>;

export const Default: Story = {};
