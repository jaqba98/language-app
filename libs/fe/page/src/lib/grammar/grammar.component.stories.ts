import { type Meta, type StoryObj } from '@storybook/angular';

import { GrammarComponent } from './grammar.component';

const meta: Meta<GrammarComponent> = {
  component: GrammarComponent,
  title: 'fe/page/grammar',
};
export default meta;
type Story = StoryObj<GrammarComponent>;

export const Primary: Story = {};
