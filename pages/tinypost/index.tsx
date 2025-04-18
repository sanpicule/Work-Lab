'use client'

import PortfolioDetail, {
  ProcessInfoListType,
} from '@/components/PortfolioDetail'
import React, { useEffect } from 'react'

const processInfoList: ProcessInfoListType[] = [
  {
    title: 'デザインカンプ作成',
    image: '/design.jpg',
    description:
      'TinyPostでは、UIコンポーネントにMaterialUIを採用しました。自分もこの時初めて知ったのですが、Material UIをはじめとした、UIコンポーネントを提供しているサービスは、Figmaとの連携が、容易にできます。Figmaでデザインを作成し、Material UIのコンポーネントに変換することで、開発効率が大幅に向上しました。両親が使うということもあり、直感的でわかりやすいデザインを心がけました。',
    tools: [
      {
        title: '使用サービス',
        items: ['Figma', 'Material UI'],
      },
    ],
  },
  {
    title: 'プロジェクト管理',
    image: '/project_manage.jpg',
    description:
      'ここでもプロジェクト管理には、Notionを使用しました。また、ここで発見したのですが、GitHubでもタスクの管理などができるんですね！その機能が、issueという機能です。GitHub上で作成することができ、担当者のassignを設定したり、進捗の管理ができるので、GitHubを使用している方は、ぜひ活用してみてください！また、ブランチの作成とissueの紐付けができてしまうのでブランチがマージされるとissueも消えてくれるのでめちゃくちゃありがたい！',
    tools: [
      {
        title: '使用サービス',
        items: ['Notion', 'GitHub'],
      },
    ],
  },
  {
    title: 'プロジェクト開発',
    image: '/webapp.jpg',
    description:
      'フロントエンド設計の学習目的で、あえてオーバースペックな構成に挑戦 実務で活かせるよう、フレームワークや設計手法の理解を深めるために最新のNext.js App RouterやTailwindCSSを導入しました。再利用性を考慮したコンポーネント設計elements（汎用パーツ）とfeatures（ページごとの機能）で明確にディレクトリを分離し、保守性を高めました。',
    tools: [
      {
        title: '使用サービス',
        items: ['GitHub', 'Supabase'],
      },
      {
        title: '使用技術',
        items: ['React', 'JavaScript', 'Material UI', 'TipTap'],
      },
    ],
  },
  {
    title: 'デプロイメント',
    image: '/deployment.jpg',
    description:
      'ここでも、Vercelを使用しました。VercelはNext.jsと親和性が高く、ビルド・デプロイの自動化、カスタムドメイン対応、パフォーマンス最適化（CDN配信など）に優れているため、開発・公開のフローがスムーズです。',
    tools: [
      {
        title: '使用サービス',
        items: ['Vercel'],
      },
    ],
  },
]

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <PortfolioDetail
      image='/tinypost.png'
      spImage='/tinypost_sp.png'
      portfolioTitle='TinyPost'
      period='2024年10月 - 現在'
      numberOf={1}
      overview='この制作物は、Kikaraのブログ機能を実装するために作成したものです。TinyPostは、ReactとMaterial UIを使用して開発された、シンプルで直感的なブログ投稿アプリケーションです。ユーザーは簡単に記事を作成、編集、削除でき、リアルタイムでプレビューを確認できます。こだわりは使いやすさです。立地テキストエディタを導入することで、ユーザが直感的に操作できるようにしました。さらに、Material UIを使用して、レスポンシブなデザインを実現し、さまざまなデバイスで快適に利用できるようにしています。今後は、ユーザー管理機能やコメント機能の追加を検討しています。'
      processInfoList={processInfoList}
      summary='このプロジェクトを通じて、ReactやMaterial UIの使い方を深く理解し、実際のアプリケーション開発におけるフロントエンド設計の重要性を学びました。また、Supabaseを使用したデータ管理や認証機能の実装も経験し、バックエンドとの連携についても理解を深めることができました。今後は、さらに機能を追加し、ユーザー体験を向上させるための改善に取り組んでいきたいと考えています。'
    />
  )
}

export default Index
