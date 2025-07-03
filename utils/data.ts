import { siteConfig } from '@/site.config'
import type { PortfolioDetailProps } from '@/components/PortfolioDetail'

export const portfolioList = [
  {
    id: 'kikara',
    title: 'Kikara',
    description:
      '母親が経営するお店の公式サイト。Next.jsとFramer Motionで構築。',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
    url: 'https://kikara-official.vercel.app/',
    image: '/portfolio_kikara.png',
    githubUrl: 'https://github.com/sanpicule/KikaraHP',
  },
  {
    id: 'tinypost',
    title: 'TinyPost',
    description: 'PCが苦手な親でも簡単にお知らせを投稿できるWebアプリ。',
    technologies: ['React', 'TypeScript', 'Supabase'],
    url: 'https://tinypost-three.vercel.app/',
    image: '/portfolio_tinypost.png',
    githubUrl: 'https://github.com/sanpicule/Tinypost',
  },
  {
    id: 'shiftme',
    title: 'ShiftMe',
    description: '夢を叶えるための支出管理アプリ。生成AIを活用して開発。',
    technologies: ['AI', 'React', 'Next.js'],
    url: '',
    image: '/portfolio_me.png',
    githubUrl: 'https://github.com/sanpicule/shiftme',
  },
]

export const portfolioDetails: { [key: string]: PortfolioDetailProps } = {
  kikara: {
    link: 'https://github.com/sanpicule/KikaraHP',
    url: 'https://kikara-official.vercel.app/',
    image: '/portfolio_kikara.png',
    spImage: '/kikara_sp.png',
    portfolioTitle: 'Kikara Official Website',
    period: '1ヶ月',
    numberOf: 1,
    overview:
      '母親が経営するお店「Kikara」の公式サイトです。Next.jsを用いて静的サイトとして構築し、Framer Motionによるリッチなアニメーションで、ブランドイメージを表現しました。',
    processInfoList: [
      {
        title: '要件定義・設計',
        image: '/kikara_design.png',
        description:
          'クライアント（母親）の要望をヒアリングし、お店の雰囲気や世界観を伝えるデザインをFigmaで作成しました。特にアニメーションの動きは、実際にプロトタイプを作成しながら確認を行いました。',
        tools: [{ title: '使用ツール', items: ['Figma', 'プロトタイピング'] }],
      },
      {
        title: '開発・実装',
        image: '/kikara_dev.png',
        description:
          'Next.js (App Router) を採用し、SSG（静的サイト生成）による高速な表示パフォーマンスを実現しました。Framer Motionを全面的に導入し、スクロールやホバーに応じたインタラクティブなアニメーションを実装しています。',
        tools: [
          {
            title: '使用技術',
            items: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
          },
        ],
      },
      {
        title: 'テスト・デプロイ',
        image: '/kikara_dep.png',
        description:
          'Vercelを利用してデプロイしています。GitHubリポジトリと連携し、CI/CDパイプラインを構築することで、スムーズなデプロイフローを実現しました。',
        tools: [
          { title: '使用サービス', items: ['Vercel', 'GitHub', 'CI/CD'] },
        ],
      },
    ],
    summary:
      'このプロジェクトを通して、Next.jsとFramer Motionを組み合わせた、表現力豊かなウェブサイト制作のスキルを深めることができました。静的サイトでありながら、ユーザーを飽きさせない動きのあるデザインを実現できた点が、技術的な挑戦であり、大きな学びとなりました。',
  },
  tinypost: {
    link: 'https://github.com/sanpicule/Tinypost',
    url: 'https://tinypost-three.vercel.app/',
    image: '/portfolio_tinypost.png',
    spImage: '/tinypost_sp.png',
    portfolioTitle: 'TinyPost',
    period: '2週間',
    numberOf: 1,
    overview:
      'KikaraHPに掲載するお知らせを、PC操作に不慣れな60代の親でも簡単に投稿できるように開発したWebアプリケーションです。シンプルで直感的なUIを最優先に設計しました。',
    processInfoList: [
      {
        title: '要件定義・設計',
        image: '/design.jpg',
        description:
          'ターゲットユーザー（60代の親）を考慮し、文字サイズやボタンの配置など、迷わず操作できるシンプルな画面設計を心がけました。専門用語を排し、直感的に理解できる言葉選びにもこだわりました。',
        tools: [{ title: '使用ツール', items: ['Figma', 'ユーザーリサーチ'] }],
      },
      {
        title: '開発・実装',
        image: '/webapp.jpg',
        description:
          'フロントエンドはReactとViteで構築し、軽快な動作を実現。バックエンドと認証機能はSupabaseを利用することで、短期間での開発を可能にしました。お知らせの投稿・編集・削除といった基本的なCRUD機能を実装しています。',
        tools: [
          {
            title: 'フロントエンド',
            items: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
          },
          { title: 'バックエンド/認証', items: ['Supabase'] },
        ],
      },
      {
        title: 'テスト・デプロイ',
        image: '/webapp.jpg',
        description:
          '実際のターゲットユーザー（親）にテストしてもらい、操作性を検証しました。Vercelでデプロイし、実際に運用開始。ユーザーフィードバックを基に改善を重ねています。',
        tools: [
          {
            title: '使用サービス',
            items: ['Vercel', 'ユーザーテスト', 'フィードバック収集'],
          },
        ],
      },
    ],
    summary:
      'このプロジェクトの最大の挑戦は、技術的な複雑さよりも「いかにユーザーにとって簡単か」を追求することでした。ターゲットユーザーに寄り添ったUI/UX設計の重要性を改めて学びました。結果として、実際に親が一人で問題なく使えるアプリケーションを開発でき、大きな達成感を得られました。',
  },
  shiftme: {
    link: 'https://github.com/sanpicule/shiftme',
    url: '',
    image: '/portfolio_me.png',
    spImage: '/portfolio_sp.png',
    portfolioTitle: 'ShiftMe',
    period: '1週間',
    numberOf: 1,
    overview:
      '「夢を叶えるための支出管理アプリ」です。叶えたい夢とそれに必要な費用、自身の収入や固定費を入力することで、夢の実現に向けた毎月の貯蓄可能額を自動で算出し、日々の支出を手入力で記録することで、進捗を可視化します。',
    processInfoList: [
      {
        title: '要件定義・設計',
        image: '/project_manage.jpg',
        description:
          '生成AI（ClaudeAI）を活用して、アプリケーションのコア機能やターゲットユーザー、解決したい課題などを明確化しました。AIとの対話を通じて、アイデアを具体的な要件に落とし込んでいきました。',
        tools: [{ title: '使用AI', items: ['ClaudeAI', '要件定義'] }],
      },
      {
        title: '開発・実装',
        image: '/webapp.jpg',
        description:
          'Bolt.newという生成AIサービスを利用し、フロントエンドからバックエンドまでのコードを自動生成しました。AIが生成したコードをベースに、細かい仕様調整やデザインの修正を行っています。',
        tools: [{ title: '使用AI', items: ['Bolt.new', 'コード生成'] }],
      },
      {
        title: 'テスト・デプロイ',
        image: '/webapp.jpg',
        description:
          '生成されたコードの品質を評価し、必要な修正を行いました。AIとの協働開発における品質管理の重要性を学び、最終的にVercelでデプロイして運用開始しました。',
        tools: [
          {
            title: '使用サービス',
            items: ['Vercel', '品質評価', 'AI協働開発'],
          },
        ],
      },
    ],
    summary:
      'このプロジェクトは、企画から実装の大部分をAIと協力して進めるという新しい開発スタイルへの挑戦でした。AIを活用することで、個人開発でありながら、アイデアの創出からプロトタイピングまでを高速に行える可能性を実感しました。生成されたコードの品質評価や、AIに的確な指示を与えるプロンプトエンジニアリングの重要性など、多くの学びがありました。',
  },
}

export const navMenuList = [
  {
    id: 1,
    menuName: 'Home',
    pathName: '/',
  },
  {
    id: 2,
    menuName: 'Portfolio',
    pathName: '/portfolio',
  },
  {
    id: 3,
    menuName: 'About',
    pathName: '/about',
  },
  {
    id: 4,
    menuName: `Contact`,
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
