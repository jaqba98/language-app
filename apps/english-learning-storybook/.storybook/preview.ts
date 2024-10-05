import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'background-light',
      values: [
        {
          name: 'background-light',
          value: '#edeff2',
        },
        {
          name: 'background-dark',
          value: '#15191e',
        },
      ],
    },
  },
};

export default preview;
