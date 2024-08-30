export interface SectionTabModel {
  id: string;
  label: string;
  path: string;
  content: string;
}

export interface SectionStoreModel {
  defaultTabId: string;
  tabs: SectionTabModel[];
}
