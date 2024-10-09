import type { Meta, StoryObj } from '@storybook/angular';

const buildFullscreen = (fullscreen: boolean) => (fullscreen ? 'fullscreen' : 'padded');

const buildStyleMode = (isLightMode: boolean) =>
  isLightMode ? 'light-mode' : 'dark-mode';

export const buildMeta = (fullscreen: boolean): Meta => ({
  parameters: {
    layout: buildFullscreen(fullscreen),
  },
  argTypes: {
    event: {
      action: 'event',
    },
  },
});

export const buildStory = <T>(
  componentArgs: StoryObj<T>['args'],
  isLightMode: boolean,
): StoryObj<T> => ({
  args: componentArgs,
  parameters: {
    backgrounds: {
      default: buildStyleMode(isLightMode),
    },
  },
});
