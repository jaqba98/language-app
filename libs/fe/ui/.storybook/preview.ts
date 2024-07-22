import { Preview } from '@storybook/angular';
 
const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'english-learning',
      values: [
        {
          name: 'english-learning',
          value: '#FFF7FC',
        }
      ],
    },
  },
};
 
export default preview;
