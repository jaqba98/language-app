import { Component } from '@angular/core';

import { GrammarTemplateComponent, GrammarTemplateModel } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-present-simple',
  standalone: true,
  imports: [GrammarTemplateComponent],
  templateUrl: './present-simple.component.html',
})
export class PresentSimpleComponent {
  template: GrammarTemplateModel = {
    lines: [
      { kind: 'header', value: 'Present Simple', textType: 'header1' },
      { kind: 'header', value: '1) When to use it', textType: 'header2' },
      { kind: 'text', value: 'a) Pernament', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'We live in New York.',
          'He works at the bank.',
        ],
      },
      { kind: 'text', value: 'b) Routines', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'I wake up at 6:00.',
          'I go to sleep at 11:00.',
        ],
      },
      { kind: 'text', value: 'c) Facts', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'The sun rises in the east.',
        ],
      },
      { kind: 'text', value: 'd) Schedules', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'Our class starts at 9:00.',
          'The flight leaves at noon.',
        ],
      },
      { kind: 'text', value: 'e) Frequency', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'never = 0%',
          'rarely = 10-20%',
          'sometimes = 50%',
          'often = 75%',
          'always = 100%',
        ],
      },
      { kind: 'header', value: '2) How to use it', textType: 'header2' },
      { kind: 'text', value: 'a) Positive', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'I work',
          'You work',
          'He works',
          'She works',
          'It works',
          'We work',
          'You work',
          'They work',
        ],
      },
      { kind: 'text', value: 'b) Negative', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'I do not (don\'t) work',
          'You do not (don\'t) work',
          'He does not (doesn\'t) works',
          'She does not (doesn\'t) works',
          'It does not (doesn\'t) works',
          'We do not (don\'t) work',
          'You do not (don\'t) work',
          'They do not (don\'t) work',
        ],
      },
      { kind: 'text', value: 'c) Question', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'Do I work?',
          'Do you work?',
          'Does he works?',
          'Does she works?',
          'Does it works?',
          'Do we work?',
          'Do you work?',
          'Do they work?',
        ],
      },
      { kind: 'text', value: 'd) Question words', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'who',
          'what',
          'when',
          'where',
          'why',
          'which',
          'whose',
          'how',
        ],
      },
      { kind: 'header', value: '3) Spelling', textType: 'header2' },
      { kind: 'text', value: 'a) most verbs / add s', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'dance -> dances',
          'cook -> cooks',
          'sleep -> sleeps',
        ],
      },
      { kind: 'text', value: 'b) verbs ending in s, sch, ch, x / add es', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'kiss -> kisses',
          'wasch -> washes',
          'teach -> teaches',
          'fix -> fixes',
        ],
      },
      { kind: 'text', value: 'c) verbs ending in consontant and y / dtop y and add ies', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'study -> studies',
          'try -> tries',
        ],
      },
      { kind: 'text', value: 'd) others', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'go -> goes',
          'do -> does',
          'have -> has',
        ],
      },
      { kind: 'header', value: '4) Short answers', textType: 'header2' },
      { kind: 'text', value: 'a) Do they need help?', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'Yes, they do.',
          'No, they don\'t.',
        ],
      },
      { kind: 'text', value: 'b) Does he speak French?', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'Yes, he does.',
          'No, he doesn\'t.',
        ],
      },
      { kind: 'text', value: 'c) Do you like this song?', textType: 'paragraph' },
      {
        kind: 'multiline-text',
        lines: [
          'Yes, I do.',
          'No, I don\'t.',
        ],
      },
    ],
  };
}
