import { RoutesMenuModel } from '../model/routes-menu.model';

export const routesMainNav: RoutesMenuModel[] = [
  { value: 'Home', link: '/home' },
  { value: 'Vocabulary', link: '/vocabulary' },
  { value: 'Grammar', link: '/grammar' },
];

export const routesGrammar: RoutesMenuModel[] = [
  { value: 'Present Simple', link: '/grammar/present-simple' },
  { value: 'Present Continuous', link: '/grammar/present-continuous' },
];

export const routesVocabulary: RoutesMenuModel[] = [
  { value: 'Test1', link: '/vocabulary/test1' },
  { value: 'Test2', link: '/vocabulary/test2' },
];

export const routesVocabularyTest1: RoutesMenuModel[] = [
  { value: 'Bank', link: '/vocabulary/test1/bank' },
];
