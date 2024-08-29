export interface SectionTabModel {
  name: string;
  label: string;
  path: string;
  isDefault: boolean;
}

export interface SectionStoreModel {
  tabs: SectionTabModel[];
}
