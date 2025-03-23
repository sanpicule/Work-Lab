import { getText } from '../../utils/property'

describe('ArticleMetaに関するテスト', () => {
  const sampleArticleProperty = [
    {
      plain_text: 'Hello',
      href: null,
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
      },
    },
    {
      plain_text: ' World',
      href: null,
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: 'default',
      },
    },
  ]
  describe('getText関数に関するテスト', () => {
    test('投稿のタイトルが取得できる', () => {
      expect(getText(sampleArticleProperty)).toBe('Hello World')
    })

    test('空の配列なら空文字を返す', () => {
      expect(getText([])).toBe('')
    })

    test('undefinedやnullが渡された場合は空文字を返す', () => {
      expect(getText(undefined as any)).toBe('')
      expect(getText(null as any)).toBe('')
    })
  })

  // TODO: 他の関数に関するテストを追加する
})
