import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { InputComponent } from './input.component';
import { ControlKindEnum } from '../../enum/control-kind.enum';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'fe/ui/control/input',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<InputComponent>;

const buildStoryArgs = (): Story['args'] => ({
  form: new FormControl(''),
  control: {
    kind: ControlKindEnum.input,
    id: 'input',
    alignItems: 'flex-start',
    validation: {
      validators: [],
      isVisible: true,
    },
    label: {
      value: 'Login',
      isVisible: true,
    },
    input: {
      defaultValue: '',
      placeholder: '',
      type: 'text',
    },
  },
});

export const DefaultLight = buildStory<InputComponent>(buildStoryArgs(), true);

export const DefaultDark = buildStory<InputComponent>(buildStoryArgs(), false);
