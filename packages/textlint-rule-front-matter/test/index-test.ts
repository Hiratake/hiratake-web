import TextLintTester from 'textlint-tester'
import rule from '../src/index'

const tester = new TextLintTester()

tester.run('Front Matter', rule, {
  valid: [
    {
      text: `---
title: これはテスト
---

ここに本文
`,
    },
    {
      text: `---
title: これはテスト
created: 2023-07-17
updated: 2023-07-17
---

ここに本文
`,
      options: {
        keys: [
          { name: 'title', required: true },
          { name: 'created', required: true },
          { name: 'updated', required: true },
        ],
      },
    },
    {
      text: 'ここに本文',
    },
  ],
  invalid: [
    {
      text: 'ここに本文',
      options: {
        enableFrontMatterExistenceCheck: true,
      },
      errors: [{ message: 'Front Matter がありません。' }],
    },
    {
      text: `---
title: これはテスト
created: 2023-07-17
updated: 2023-07-17

ここに本文`,
      options: {
        enableFrontMatterExistenceCheck: true,
      },
      errors: [{ message: 'Front Matter がありません。' }],
    },
    {
      text: `---
title: これはテスト
---

ここに本文
`,
      options: {
        keys: [
          { name: 'title', required: true },
          { name: 'created', required: true },
          { name: 'updated', required: true },
        ],
      },
      errors: [
        { message: 'Front Matter に「created」を指定してください。' },
        { message: 'Front Matter に「updated」を指定してください。' },
      ],
    },
  ],
})
