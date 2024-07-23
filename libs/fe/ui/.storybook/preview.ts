import { Preview } from '@storybook/angular';
 
const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'english-learning',
      values: [
        {
          name: 'english-learning',
          value: '#19456B',
        }
      ],
    },
  },
};
 
export default preview;
