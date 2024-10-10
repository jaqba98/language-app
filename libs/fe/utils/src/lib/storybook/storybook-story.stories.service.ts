import type { StoryObj } from '@storybook/angular';

export const buildStoryArgs = <T>(args: StoryObj<T>['args']): StoryObj<T> => ({
  args,
});

export const buildStoryLightMode = <T>(): StoryObj<T> => ({
  parameters: {
    backgrounds: {
      default: 'light-mode',
    },
  },
});

export const buildStoryDarkMode = <T>(): StoryObj<T> => ({
  parameters: {
    backgrounds: {
      default: 'dark-mode',
    },
  },
});

export const buildStoryTemplate = <T>(template: string): StoryObj<T> => ({
  render: args => ({
    props: args,
    template,
  }),
});
