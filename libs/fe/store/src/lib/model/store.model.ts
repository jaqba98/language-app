import { SectionStoreModel } from './section-store.model';

export interface StoreModel {
  grammar: SectionStoreModel;
}

export type StoreType = keyof StoreModel;
