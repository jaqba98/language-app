import { Preview } from '@storybook/angular';
 
const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'english-learning',
      values: [
        {
          name: 'english-learning',
          value: '#113f67',
        }
      ],
    },
  },
};
 
export default preview;
