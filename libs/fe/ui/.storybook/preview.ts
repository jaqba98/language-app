import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'english-learning',
      values: [
        {
          name: 'english-learning',
          value: '#2D3250',
        },
      ],
    },
  },
};

export default preview;
