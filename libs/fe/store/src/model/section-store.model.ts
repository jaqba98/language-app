export interface SectionTabModel {
  name: string;
  label: string;
  path: string;
  isDefault: boolean;
  content: string;
}

export interface SectionStoreModel {
  tabs: SectionTabModel[];
}
