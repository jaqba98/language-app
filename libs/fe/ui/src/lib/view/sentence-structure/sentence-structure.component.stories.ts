import { type Meta, type StoryObj } from '@storybook/angular';

import { SentenceStructureComponent } from './sentence-structure.component';

const meta: Meta<SentenceStructureComponent> = {
  component: SentenceStructureComponent,
  title: 'fe/ui/view/sentence-structure',
};
export default meta;
type Story = StoryObj<SentenceStructureComponent>;

export const Primary: Story = {
  args: {
    items: [
      'aaa',
      'bbb',
      'ccc',
      'ddd',
    ],
  },
};
