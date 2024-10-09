import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { ButtonTextComponent } from './button-text.component';
import { textControlStory } from './text-control-story.service';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'fe/ui/control/button-text',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

const buildStoryArgs = (): Story['args'] => ({
  formControl: new FormControl(false),
  control: textControlStory('button'),
});

export const ButtonTextLight = buildStory<ButtonTextComponent>(buildStoryArgs(), true);

export const ButtonTextDark = buildStory<ButtonTextComponent>(buildStoryArgs(), false);
