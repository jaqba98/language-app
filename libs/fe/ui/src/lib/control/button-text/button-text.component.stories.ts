import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { ButtonKindType } from '@english-learning/fe-component';
import { buildBaseStory, buildMetaEventAction } from '@english-learning/fe-utils';
import { ButtonTextComponent } from './button-text.component';
import { buttonTextControlStory } from './button-text-control-story.service';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'fe/ui/control/button-text',
  ...buildMetaEventAction(),
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

const buildButtonTextArgs = (type: ButtonKindType): Story['args'] => ({
  controlForm: new FormControl(false),
  control: buttonTextControlStory(type),
});

export const ButtonTextLight = buildBaseStory(true, buildButtonTextArgs('button'));

export const ButtonTextDark = buildBaseStory(false, buildButtonTextArgs('button'));
