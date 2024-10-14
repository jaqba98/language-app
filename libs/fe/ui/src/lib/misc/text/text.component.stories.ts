import type { Meta, StoryObj } from '@storybook/angular';

import { buildBaseStory, buildMetaEventAction } from '@english-learning/fe-utils';
import { TextComponent } from './text.component';
import { TextColorType, TextType } from './text.type';

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: 'fe/ui/misc/text',
  ...buildMetaEventAction(),
};
export default meta;
type Story = StoryObj<TextComponent>;

const buildTextArgs = (
  type: TextType,
  color: TextColorType = 'default',
): Story['args'] => ({
  type,
  color,
  value: 'Hello world',
});

export const TinyTextLight = buildBaseStory(true, buildTextArgs('tiny'));
export const TinyTextDark = buildBaseStory(false, buildTextArgs('tiny'));

export const ParagraphTextLight = buildBaseStory(true, buildTextArgs('paragraph'));
export const ParagraphTextDark = buildBaseStory(false, buildTextArgs('paragraph'));

export const Header1TextLight = buildBaseStory(true, buildTextArgs('header1'));
export const Header1TextDark = buildBaseStory(false, buildTextArgs('header1'));

export const Header2TextLight = buildBaseStory(true, buildTextArgs('header2'));
export const Header2TextDark = buildBaseStory(false, buildTextArgs('header2'));

export const Header3TextLight = buildBaseStory(true, buildTextArgs('header3'));
export const Header3TextDark = buildBaseStory(false, buildTextArgs('header3'));

export const ErrorLight = buildBaseStory(true, buildTextArgs('paragraph', 'error'));
export const ErrorDark = buildBaseStory(false, buildTextArgs('paragraph', 'error'));

export const WarningLight = buildBaseStory(true, buildTextArgs('paragraph', 'warning'));
export const WarningDark = buildBaseStory(false, buildTextArgs('paragraph', 'warning'));

export const SuccessLight = buildBaseStory(true, buildTextArgs('paragraph', 'success'));
export const SuccessDark = buildBaseStory(false, buildTextArgs('paragraph', 'success'));
