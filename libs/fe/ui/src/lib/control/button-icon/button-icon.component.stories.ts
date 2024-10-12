import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildBaseStory, buildMetaEventAction } from '@english-learning/fe-utils';
import { ButtonIconComponent } from './button-icon.component';
import { buttonIconControlStory } from './button-icon-control-story.service';

const meta: Meta<ButtonIconComponent> = {
  component: ButtonIconComponent,
  title: 'fe/ui/control/button-icon',
  ...buildMetaEventAction(),
};
export default meta;
type Story = StoryObj<ButtonIconComponent>;

const buildButtonArgs = (): Story['args'] => ({
  controlForm: new FormControl(false),
  control: buttonIconControlStory,
});

export const ButtonIconLight = buildBaseStory(true, buildButtonArgs());

export const ButtonIconDark = buildBaseStory(false, buildButtonArgs());
