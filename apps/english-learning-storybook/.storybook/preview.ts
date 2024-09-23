import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'primary',
      values: [
        {
          name: 'primary',
          value: '#f1f1f1',
        },
        {
          name: 'accent',
          value: '#4e31aa',
        },
      ],
    },
  },
};

export default preview;
