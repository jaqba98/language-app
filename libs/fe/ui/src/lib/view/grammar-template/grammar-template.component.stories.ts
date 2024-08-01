import { type Meta, type StoryObj } from '@storybook/angular';

import { GrammarTemplateComponent } from './grammar-template.component';
import { TextEnum } from '../../misc/text/text.enum';

const meta: Meta<GrammarTemplateComponent> = {
  component: GrammarTemplateComponent,
  title: 'fe/ui/view/grammar-template',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<GrammarTemplateComponent>;

export const Primary: Story = {
  args: {
    template: {
      lines: [
        { type: TextEnum.header1, value: 'Hello world 1' },
        { type: TextEnum.header2, value: 'Hello world 2' },
        { type: TextEnum.paragraph, value: 'Hello world 3' },
      ]
    }
  }
};
