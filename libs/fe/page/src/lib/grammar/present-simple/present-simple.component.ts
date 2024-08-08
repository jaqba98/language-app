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
      {
        kind: 'header', value: 'Present Simple', textType: 'header1', link: 'home',
      },
      {
        kind: 'header', value: '1 When to use it', textType: 'header2', link: 'when-to-use-it',
      },
      {
        kind: 'header', value: '1.1 Pernament', textType: 'header3', link: 'pernament',
      },
      {
        kind: 'multiline-text',
        lines: [
          'We live in New York.',
          'He works at the bank.',
        ],
      },
      {
        kind: 'header', value: '1.2 Routines', textType: 'header3', link: 'routines',
      },
      {
        kind: 'multiline-text',
        lines: [
          'I wake up at 6:00.',
          'I go to sleep at 11:00.',
        ],
      },
      {
        kind: 'header', value: '1.3 Facts', textType: 'header3', link: 'facts',
      },
      {
        kind: 'multiline-text',
        lines: [
          'The sun rises in the east.',
        ],
      },
      {
        kind: 'header', value: '1.4 Schedules', textType: 'header3', link: 'schedules',
      },
      {
        kind: 'multiline-text',
        lines: [
          'Our class starts at 9:00.',
          'The flight leaves at noon.',
        ],
      },
      {
        kind: 'header', value: '1.5 Frequency', textType: 'header3', link: 'frequency',
      },
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
      {
        kind: 'header', value: '2 How to use it', textType: 'header2', link: 'how-to-use-it',
      },
      {
        kind: 'header', value: '2.1 Positive', textType: 'header3', link: 'positive',
      },
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
      {
        kind: 'header', value: '2.2 Negative', textType: 'header3', link: 'negative',
      },
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
      {
        kind: 'header', value: '2.3 Question', textType: 'header3', link: 'question',
      },
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
      {
        kind: 'header', value: '3 Question words', textType: 'header2', link: 'question-words',
      },
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
      {
        kind: 'header', value: '4 Spelling', textType: 'header2', link: 'spelling',
      },
      {
        kind: 'header', value: '4.1 most verbs / add s', textType: 'header3', link: 'most-verbs',
      },
      {
        kind: 'multiline-text',
        lines: [
          'dance -> dances',
          'cook -> cooks',
          'sleep -> sleeps',
        ],
      },
      {
        kind: 'header', value: '4.2 verbs ending in s, sch, ch, x / add es', textType: 'header3', link: 'verbs-ending-in-s',
      },
      {
        kind: 'multiline-text',
        lines: [
          'kiss -> kisses',
          'wasch -> washes',
          'teach -> teaches',
          'fix -> fixes',
        ],
      },
      {
        kind: 'header', value: '4.3 verbs ending in consontant and y / dtop y and add ies', textType: 'header3', link: 'verbs-ending-in-consontant-and-y',
      },
      {
        kind: 'multiline-text',
        lines: [
          'study -> studies',
          'try -> tries',
        ],
      },
      {
        kind: 'header', value: '4.4 others', textType: 'header3', link: 'others',
      },
      {
        kind: 'multiline-text',
        lines: [
          'go -> goes',
          'do -> does',
          'have -> has',
        ],
      },
      {
        kind: 'header', value: '5. Short answers', textType: 'header2', link: 'short-answers',
      },
      {
        kind: 'header', value: '5.1 Do they need help?', textType: 'header3', link: 'do-they-need-help',
      },
      {
        kind: 'multiline-text',
        lines: [
          'Yes, they do.',
          'No, they don\'t.',
        ],
      },
      {
        kind: 'header', value: '5.2 Does he speak French?', textType: 'header3', link: 'does-he-speak-french',
      },
      {
        kind: 'multiline-text',
        lines: [
          'Yes, he does.',
          'No, he doesn\'t.',
        ],
      },
      {
        kind: 'header', value: '5.3 Do you like this song?', textType: 'header3', link: 'do-you-like-this-song',
      },
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
