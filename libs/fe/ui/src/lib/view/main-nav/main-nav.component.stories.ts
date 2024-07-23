import type { Meta, StoryObj } from '@storybook/angular';

import { MainNavComponent } from './main-nav.component';

const meta: Meta<MainNavComponent> = {
  component: MainNavComponent,
  title: 'View/MainNav',
  parameters: {
    layout: 'fullscreen'
  }
};
export default meta;
type Story = StoryObj<MainNavComponent>;

export const Primary: Story = {
  args: {
    options: [
      { title: "Link 1", link: "/link1" },
      { title: "Link 2", link: "/link2" },
      { title: "Link 3", link: "/link3" },
      { title: "Link 4", link: "/link4" },
      { title: "Link 5", link: "/link5" }
    ]
  }
};
