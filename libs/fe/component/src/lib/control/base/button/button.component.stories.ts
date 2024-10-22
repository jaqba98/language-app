import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildBaseStory, buildMetaEventAction } from '@english-learning/fe-utils';
import { ButtonComponent } from './button.component';
import { ButtonShapeType } from './button.type';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'fe/component/base/button',
  ...buildMetaEventAction(),
};
export default meta;
type Story = StoryObj<ButtonComponent>;

const buildArgs = (shape: ButtonShapeType): Story['args'] => ({
  controlForm: new FormControl(false),
  kind: 'button',
  shape,
});

export const ButtonSquareLight = buildBaseStory(true, buildArgs('square'));

export const ButtonSquareDark = buildBaseStory(false, buildArgs('square'));

export const ButtonRectangleLight = buildBaseStory(true, buildArgs('rectangle'));

export const ButtonRectangleDark = buildBaseStory(false, buildArgs('rectangle'));
