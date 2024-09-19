import {
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ButtonLinkComponent } from './button-link.component';
import { ControlKindEnum } from '../../enum/control-kind.enum';

const meta: Meta<ButtonLinkComponent> = {
  component: ButtonLinkComponent,
  title: 'fe/ui/control/button-link',
  decorators: [
    moduleMetadata({
      providers: [{ provide: ActivatedRoute, useValue: [] }],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
};
export default meta;
type Story = StoryObj<ButtonLinkComponent>;

export const Primary: Story = {
  args: {
    form: new FormControl(false),
    control: {
      kind: ControlKindEnum.buttonLink,
      id: 'submit',
      alignItems: 'flex-start',
      validation: {
        validators: [],
        isVisible: false,
      },
      label: 'Submit',
      path: '',
    },
  },
};
