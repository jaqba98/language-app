import type { Meta, StoryObj } from '@storybook/angular';

import { DashboardNavComponent } from './dashboard-nav.component';

const meta: Meta<DashboardNavComponent> = {
  component: DashboardNavComponent,
  title: 'fe/ui/view/dashboard-nav',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<DashboardNavComponent>;

export const DefaultLight: Story = {};

export const DefaultDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark-mode',
    },
  },
};

// import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
// import { ActivatedRoute } from '@angular/router';
// import { MainNavComponent } from './dashboard-nav.component';
// const meta: Meta<MainNavComponent> = {
//   component: MainNavComponent,
//   title: 'fe/ui/view/main-nav',
//   decorators: [
//     moduleMetadata({
//       providers: [{ provide: ActivatedRoute, useValue: [] }],
//     }),
//   ],
//   parameters: {
//     layout: 'fullscreen',
//   },
// };
// export default meta;
// type Story = StoryObj<MainNavComponent>;
// export const Primary: Story = {};
