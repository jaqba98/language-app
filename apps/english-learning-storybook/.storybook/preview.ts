import type { Preview } from '@storybook/angular';
import { StoryContext } from 'storybook/internal/types';

// TODO: Fix the any type!
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setStyleMode = (story: any, context: StoryContext) => {
  const isDarkMode = context.parameters['backgrounds']?.default === 'dark-mode';
  if (isDarkMode) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
  return story();
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light-mode',
      values: [
        {
          name: 'light-mode',
          value: '#edeff2',
        },
        {
          name: 'dark-mode',
          value: '#15191e',
        },
      ],
    },
  },
  decorators: [setStyleMode],
};

export default preview;
