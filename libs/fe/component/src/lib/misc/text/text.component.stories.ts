import type { Meta, StoryObj } from '@storybook/angular';

import { buildBaseStory } from '@english-learning/fe-utils';
import { TextComponent } from './text.component';
import { TextColorType, TextKindType } from './text.type';

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: 'fe/component/misc/text',
};
export default meta;
type Story = StoryObj<TextComponent>;

const buildArgs = (kind: TextKindType, color: TextColorType): Story['args'] => ({
  value: 'Hello, world!',
  kind,
  color,
});

export const SmallTextLight = buildBaseStory(true, buildArgs('small', 'default'));
export const SmallTextDark = buildBaseStory(false, buildArgs('small', 'default'));

export const ParagraphTextLight = buildBaseStory(true, buildArgs('paragraph', 'default'));
export const ParagraphTextDark = buildBaseStory(false, buildArgs('paragraph', 'default'));

export const Header1TextLight = buildBaseStory(true, buildArgs('header1', 'default'));
export const Header1TextDark = buildBaseStory(false, buildArgs('header1', 'default'));

export const Header2TextLight = buildBaseStory(true, buildArgs('header2', 'default'));
export const Header2TextDark = buildBaseStory(false, buildArgs('header2', 'default'));

export const Header3TextLight = buildBaseStory(true, buildArgs('header3', 'default'));
export const Header3TextDark = buildBaseStory(false, buildArgs('header3', 'default'));

export const LightLight = buildBaseStory(true, buildArgs('paragraph', 'light'));
export const LightDark = buildBaseStory(false, buildArgs('paragraph', 'light'));

export const LighterLight = buildBaseStory(true, buildArgs('paragraph', 'lighter'));
export const LighterDark = buildBaseStory(false, buildArgs('paragraph', 'lighter'));

export const ErrorLight = buildBaseStory(true, buildArgs('paragraph', 'error'));
export const ErrorDark = buildBaseStory(false, buildArgs('paragraph', 'error'));

export const WarningLight = buildBaseStory(true, buildArgs('paragraph', 'warning'));
export const WarningDark = buildBaseStory(false, buildArgs('paragraph', 'warning'));

export const SuccessLight = buildBaseStory(true, buildArgs('paragraph', 'success'));
export const SuccessDark = buildBaseStory(false, buildArgs('paragraph', 'success'));
