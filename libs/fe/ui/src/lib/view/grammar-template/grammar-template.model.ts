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

type TemplateLineType = TextModel | MultilineTextModel;

export interface GrammarTemplateModel {
  lines: TemplateLineType[];
}
