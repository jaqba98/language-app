import { moduleMetadata, type Meta } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';
import { NgModuleMetadata } from '@storybook/angular/dist/client/types';
import { Provider } from '@angular/core';

export const buildMetaFullScreen = (): Meta => ({
  parameters: {
    layout: 'fullscreen',
  },
});

export const buildMetaModuleMetaData = (
  imports: NgModuleMetadata['imports'],
  providers: NgModuleMetadata['providers'],
): Meta => ({
  decorators: [
    moduleMetadata({
      imports,
      providers,
    }),
  ],
});

export const buildActivatedRouteProvider = (): Provider => ({
  provide: ActivatedRoute,
  useValue: [],
});

export const buildMetaEventAction = (): Meta => ({
  argTypes: {
    event: {
      action: 'event',
    },
  },
});
