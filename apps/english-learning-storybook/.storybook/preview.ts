import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'background',
      values: [
        {
          name: 'background',
          value: '#f0eff1',
        },
      ],
    },
  },
};

export default preview;
