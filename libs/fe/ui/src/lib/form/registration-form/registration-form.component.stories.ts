import {
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { RegistrationFormComponent } from './registration-form.component';

const meta: Meta<RegistrationFormComponent> = {
  component: RegistrationFormComponent,
  title: 'fe/ui/form/registration-form',
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
type Story = StoryObj<RegistrationFormComponent>;

export const Default: Story = {};
