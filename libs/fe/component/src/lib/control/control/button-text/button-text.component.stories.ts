import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildBaseStory, buildMetaEventAction } from '@english-learning/fe-utils';
import { ButtonTextComponent } from './button-text.component';
import { buttonTextControlStory } from './button-text-control-story.service';
import { ButtonKindType } from '../../base/button/button.type';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'fe/component/control/button-text',
  ...buildMetaEventAction(),
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

const buildArgs = (type: ButtonKindType): Story['args'] => ({
  controlForm: new FormControl(false),
  control: buttonTextControlStory(type),
});

export const ButtonTextLight = buildBaseStory(true, buildArgs('button'));
export const ButtonTextDark = buildBaseStory(false, buildArgs('button'));
