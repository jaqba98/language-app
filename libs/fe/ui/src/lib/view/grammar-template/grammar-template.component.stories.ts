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
      title: {
        value: "Present Simple",
        type: TextEnum.header2
      }
    }
  }
};
