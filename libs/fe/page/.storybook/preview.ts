import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#eee',
        },
      ],
    },
  },
};

export default preview;
