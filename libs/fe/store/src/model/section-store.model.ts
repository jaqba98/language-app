export interface SectionTabModel {
  label: string;
  path: string;
  isDefault: boolean;
}

export interface SectionStoreModel {
  tabs: SectionTabModel[];
}
