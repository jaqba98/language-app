import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildStoryArgs,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { TextComponent } from './text.component';
import { TextType } from './text.type';

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: 'fe/ui/misc/text',
};
export default meta;
type Story = StoryObj<TextComponent>;

const buildTextStoryArgs = (type: TextType): Story['args'] => ({
  type,
  value: 'Hello world',
});

export const TinyTextLight: Story = {
  ...buildStoryArgs(buildTextStoryArgs('tiny')),
  ...buildStoryLightMode(),
};

export const ParagraphTextLight: Story = {
  ...buildStoryArgs(buildTextStoryArgs('paragraph')),
  ...buildStoryLightMode(),
};

export const Header1TextLight: Story = {
  ...buildStoryArgs(buildTextStoryArgs('header1')),
  ...buildStoryLightMode(),
};

export const Header2TextLight: Story = {
  ...buildStoryArgs(buildTextStoryArgs('header2')),
  ...buildStoryLightMode(),
};

export const Header3TextLight: Story = {
  ...buildStoryArgs(buildTextStoryArgs('header3')),
  ...buildStoryLightMode(),
};

export const TinyTextDark: Story = {
  ...buildStoryArgs(buildTextStoryArgs('tiny')),
  ...buildStoryDarkMode(),
};

export const ParagraphTextDark: Story = {
  ...buildStoryArgs(buildTextStoryArgs('paragraph')),
  ...buildStoryDarkMode(),
};

export const Header1TextDark: Story = {
  ...buildStoryArgs(buildTextStoryArgs('header1')),
  ...buildStoryDarkMode(),
};

export const Header2TextDark: Story = {
  ...buildStoryArgs(buildTextStoryArgs('header2')),
  ...buildStoryDarkMode(),
};

export const Header3TextDark: Story = {
  ...buildStoryArgs(buildTextStoryArgs('header3')),
  ...buildStoryDarkMode(),
};
