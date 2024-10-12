import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildBaseStory, buildMetaEventAction } from '@english-learning/fe-utils';
import { ButtonComponent } from './button.component';
import { ButtonShapeType } from './button.type';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'fe/ui/control/button',
  ...buildMetaEventAction(),
};
export default meta;
type Story = StoryObj<ButtonComponent>;

const buildButtonArgs = (shape: ButtonShapeType): Story['args'] => ({
  controlForm: new FormControl(false),
  type: 'button',
  shape,
});

export const ButtonSquareLight = buildBaseStory(true, buildButtonArgs('square'));

export const ButtonSquareDark = buildBaseStory(false, buildButtonArgs('square'));

export const ButtonRectangleLight = buildBaseStory(true, buildButtonArgs('rectangle'));

export const ButtonRectangleDark = buildBaseStory(false, buildButtonArgs('rectangle'));
