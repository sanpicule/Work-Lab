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
      '今回は、UdemyでNotion APIの使い方を学習したハンズオンのプロジェクトのデザインをベースとして、後付けで別ページのデザインをしてきました。もちろんFigmaを使用して今回も作成させていただきました。',
    tools: [
      {
        title: '使用サービス',
        items: ['Figma'],
      },
    ],
  },
  {
    title: 'プロジェクト管理',
    image: '/project_manage.jpg',
    description:
      'ここでもプロジェクト管理には、Notionを使用しました。今回は厳格なプロジェクト管理となるように WBSの作成もNotionで作成しました。Notionではプロジェクトを計画通りに進められるような機能が多くありました。また、優先度や依存タスクなども考慮しながら、タスク分割をすることで円滑なプロジェクト進行ができました。',
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
      'このプロジェクトでは、自身初めて、TypeScriptの採用となりました。強みや便利さを痛感し、今後のプロジェクトや自己学習はTypeScriptに絞ろうと心に決めれたいいきっかけでした。また、Notion APIを使用して記事一覧を作成することができて、また新たな技術力の向上につながったのが個人的にすごく楽しかったなと思います。',
    tools: [
      {
        title: '使用サービス',
        items: ['GitHub'],
      },
      {
        title: '使用技術',
        items: ['NextJS', 'TypeScript', 'Material UI', 'TailwindCSS', 'Framer Motion', 'Playwright', 'Vitest'],
      },
    ],
  },
  {
    title: 'デプロイメント',
    image: '/deployment.jpg',
    description:
      'このプロジェクト「My Portfolio」も、Vercel を利用してホスティングされています。VercelはNext.jsと親和性が高く、ビルド・デプロイの自動化、カスタムドメイン対応、パフォーマンス最適化（CDN配信など）に優れているため、開発・公開のフローがスムーズです。',
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
      link='https://github.com/sanpicule/Work-Lab'
      image='/portfolio.png'
      spImage='/portfolio_sp.png'
      portfolioTitle='My Portfolio'
      period='2024年4月 - 2025年1月'
      numberOf={4}
      overview='この制作物は、私について紹介するためのポートフォリオサイトです。エンジニアになってからの実績を誰にでも見てもらえる形にしたくて作成しました。また、学習した結果をNotionに残していますが、Notion APIを使用して学んだことを記事一覧として作成しているので、閲覧していただけると幸いです。'
      processInfoList={processInfoList}
      summary='この開発を通して、Next.jsやTypeScriptの使い方を深く理解し、実際のアプリケーション開発におけるフロントエンド設計の重要性を学びました。また、Notion APIを使用したデータ管理の実装も経験し、バックエンドとの連携についても理解を深めることができました。今後は、さらに機能を追加し、ユーザー体験を向上させるための改善に取り組んでいきたいと考えています。'
    />
  )
}

export default Index
