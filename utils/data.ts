import { siteConfig } from '@/site.config'

export const portfolioList = [
  {
    id: 'kikara',
    title: 'Kikara',
    url: 'https://kikara-official.vercel.app/',
    image: '/portfolio_kikara.png',
  },
  {
    id: 'tinypost',
    title: 'TinyPost',
    url: 'https://tinypost-three.vercel.app/',
    image: '/portfolio_tinypost.png',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    url: 'https://notion-blog-gray-theta.vercel.app/',
    image: '/portfolio_me.png',
  },
]

export const navMenuList = [
  {
    id: 1,
    menuName: `${siteConfig.articleList}`,
    pathName: '/articles',
  },
  {
    id: 2,
    menuName: 'Kikara',
    pathName: '/kikara',
  },
  {
    id: 3,
    menuName: 'TinyPost',
    pathName: '/tinypost',
  },
  {
    id: 4,
    menuName: 'My Portfolio',
    pathName: '/portfolio',
  },
  {
    id: 5,
    menuName: `CONTACT`,
    pathName: '/contact',
  },
]

export const skillList = [
  {
    skillName: 'React',
    officialUrl: 'https://ja.legacy.reactjs.org/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    description:
      'Reactを活用してモダンなUIコンポーネントを構築し、ページネーションや検索機能を備えたデータテーブルを実装しました。また、Supabaseをバックエンドに使用してユーザー認証機能を開発し、Material UIやZustandを組み合わせたレスポンシブで再利用可能なデザインの実現にも取り組みました。これにより、パフォーマンスを考慮した効率的なアプリケーション開発を行っています。',
  },
  {
    skillName: 'TypeScript',
    officialUrl: 'https://www.typescriptlang.org/',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
    description:
      'TypeScriptを活用した開発では、型定義を活用してエラーを事前に防ぎ、信頼性の高いコードを提供しています。APIレスポンスの型チェックやUnion型などを活用し、保守性や拡張性を意識したコードを実現。これにより、チーム内での開発効率向上にも貢献しました。',
  },
  {
    skillName: 'Next.js',
    officialUrl: 'https://nextjs.org/',
    imageUrl:
      'https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png',
    description:
      'Next.jsを活用し、サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）を用いたSEOに強いウェブサイトを構築しました。TailwindCSSを利用してデザインの効率化を図りながら、動的ルーティングやメール送信機能を備えたコンタクトフォームの実装にも対応しました。これにより、フロントエンドとバックエンドを統合した柔軟な開発が可能です。',
  },
  {
    skillName: 'Supabase',
    officialUrl: 'https://supabase.com/',
    imageUrl:
      'https://www.quantedsquare.com/services/tools-images/logo_supabase.svg',
    description:
      'Pythonでは、FastAPIを用いてバックエンドAPIを構築し、AWS Cognitoを利用したユーザー認証システムを開発しました。また、データ処理や分析を効率化するスクリプトを作成し、タスクの自動化にも対応しています。これにより、バックエンドロジックの設計と運用の効率化を実現しました。',
  },
]
