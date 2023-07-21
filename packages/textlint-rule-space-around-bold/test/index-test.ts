import TextLintTester from 'textlint-tester'
import rule from '../src/index'

const tester = new TextLintTester()

tester.run('太字の前後のスペース', rule, {
  valid: [
    {
      text: '通常のテキストと **太字** との間はスペースを入れる',
      options: {
        before: true,
        after: true,
      },
    },
    {
      text: '通常のテキストと**太字**との間はスペースを入れない',
      options: {
        before: false,
        after: false,
      },
    },
    {
      text: '通常のテキストと **太字**との間は前だけスペースを入れる',
      options: {
        before: true,
        after: false,
      },
    },
    {
      text: '通常のテキストと**太字** との間は後だけスペースを入れる',
      options: {
        before: false,
        after: true,
      },
    },
    {
      text: '**太字** から始まるテキストの場合は前にスペースがなくてもよい',
      options: {
        before: true,
        after: true,
      },
    },
    {
      text: `
**太字** から始まる新しい行のテキストの場合は前にスペースがなくてもよい`,
      options: {
        before: true,
        after: true,
      },
    },
    {
      text: '太字で終わるテキストの場合は後にスペースが **なくてもよい**',
      options: {
        before: true,
        after: true,
      },
    },
    {
      text: `太字で改行されるテキストの場合は後にスペースが **なくてもよい**
`,
      options: {
        before: true,
        after: true,
      },
    },
    {
      text: `[**リンクの中の太字**](https://example.com) の前後は無視する`,
      options: {
        before: true,
        after: true,
      },
    },
  ],
  invalid: [
    {
      text: '通常のテキストと**太字**との間はスペースを入れる',
      output: '通常のテキストと **太字** との間はスペースを入れる',
      options: {
        before: true,
        after: true,
      },
      errors: [
        {
          message: '太字の前にスペースを入れてください。',
        },
        {
          message: '太字の後にスペースを入れてください。',
        },
      ],
    },
    {
      text: '通常のテキストと **太字** との間はスペースを入れない',
      output: '通常のテキストと**太字**との間はスペースを入れない',
      options: {
        before: false,
        after: false,
      },
      errors: [
        {
          message: '太字の前にスペースを入れません。',
        },
        {
          message: '太字の後にスペースを入れません。',
        },
      ],
    },
    {
      text: '通常のテキストと**太字** との間は前だけスペースを入れる',
      output: '通常のテキストと **太字**との間は前だけスペースを入れる',
      options: {
        before: true,
        after: false,
      },
      errors: [
        {
          message: '太字の前にスペースを入れてください。',
        },
        {
          message: '太字の後にスペースを入れません。',
        },
      ],
    },
    {
      text: '通常のテキストと **太字**との間は後だけスペースを入れる',
      output: '通常のテキストと**太字** との間は後だけスペースを入れる',
      options: {
        before: false,
        after: true,
      },
      errors: [
        {
          message: '太字の前にスペースを入れません。',
        },
        {
          message: '太字の後にスペースを入れてください。',
        },
      ],
    },
  ],
})
