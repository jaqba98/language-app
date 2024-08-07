import { TextType } from '../../misc/text/text.type';

interface TextModel {
  kind: 'text',
  value: string;
  textType: TextType;
}

interface MultilineTextModel {
  kind: 'multiline-text',
  lines: string[];
}

interface HeaderModel {
  kind: 'header',
  value: string;
  textType: TextType;
}

type TemplateLineType = TextModel | MultilineTextModel | HeaderModel;

export interface GrammarTemplateModel {
  lines: TemplateLineType[];
}
