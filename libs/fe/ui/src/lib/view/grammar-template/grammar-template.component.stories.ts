import { type Meta, type StoryObj } from '@storybook/angular';

import { GrammarTemplateComponent } from './grammar-template.component';

const meta: Meta<GrammarTemplateComponent> = {
  component: GrammarTemplateComponent,
  title: 'fe/ui/view/grammar-template',
};
export default meta;
type Story = StoryObj<GrammarTemplateComponent>;

export const Primary: Story = {
  args: {
    template: {
      lines: [
        { kind: 'text', textType: 'header1', value: 'Hello world 1' },
        {
          kind: 'multiline-text',
          lines: ['Line1', 'Line2', 'Line3'],
        },
        { kind: 'text', textType: 'header2', value: 'Hello world 2' },
        {
          kind: 'text',
          textType: 'paragraph',
          value: 'Hello world 3',
        },
      ],
    },
  },
};
