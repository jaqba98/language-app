import type { Meta, StoryObj } from '@storybook/angular';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { TextComponent } from './text.component';
import { TextType } from './text.type';

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: 'fe/ui/misc/text',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<TextComponent>;

const buildStoryArgs = (type: TextType): Story['args'] => ({
  type,
  value: 'Hello world',
});

export const TinyTextLight = buildStory(buildStoryArgs('tiny'), true);

export const ParagraphTextLight = buildStory(buildStoryArgs('paragraph'), true);

export const Header1TextLight = buildStory(buildStoryArgs('header1'), true);

export const Header2TextLight = buildStory(buildStoryArgs('header2'), true);

export const Header3TextLight = buildStory(buildStoryArgs('header3'), true);

export const TinyTextDark = buildStory(buildStoryArgs('tiny'), false);

export const ParagraphTextDark = buildStory(buildStoryArgs('paragraph'), false);

export const Header1TextDark = buildStory(buildStoryArgs('header1'), false);

export const Header2TextDark = buildStory(buildStoryArgs('header2'), false);

export const Header3TextDark = buildStory(buildStoryArgs('header3'), false);
