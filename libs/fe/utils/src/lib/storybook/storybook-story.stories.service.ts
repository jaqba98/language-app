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
  // TODO: Fix the any type!
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => ({
    props: {
      args,
      onClick: args.event,
    },
    template,
  }),
});

export const buildBaseStory = <T>(
  lightMode: boolean,
  args: StoryObj<T>['args'] = {},
): StoryObj<T> => {
  const styleMode = lightMode ? buildStoryLightMode() : buildStoryDarkMode();
  return {
    ...buildStoryArgs<T>(args),
    ...styleMode,
  };
};
