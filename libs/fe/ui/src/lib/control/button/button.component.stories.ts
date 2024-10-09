import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'fe/ui/control/button',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<ButtonComponent>;

const buildStoryArgs = (): Story['args'] => ({
  formControl: new FormControl(false),
  type: 'button',
});

export const ButtonLight = buildStory<ButtonComponent>(buildStoryArgs(), true);

export const ButtonDark = buildStory<ButtonComponent>(buildStoryArgs(), false);
