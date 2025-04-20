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
      'やはりホームページ作成で欠かせないのが、デザインの作成です。あまり得意分野ではないですが、学習方法に記載のサービスをうまく活用しながら、初心者の割によくできたかなと自負しております。ポイントは色のバランスと予約してもらう為までの動線です。特に、テーマカラーは、「ベースカラー」「メインカラー」「アクセントカラー」の3色をきめ、ページ全体に統一感を出しました。',
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
      'Notionを活用してプロジェクト管理を行い、タスクの洗い出しから工数見積もり、メンバーへのタスク割り当てまで一貫して担当しました。 初めてのプロジェクトマネジメントということもあり、当初のスケジュール通りに進行する難しさを実感し、結果として終了時期が大幅に遅れることとなりました。しかしこの経験を通して、リスク管理やスケジュールの余裕設定、メンバーとのコミュニケーションの重要性を学ぶことができ、自身の成長に繋がる貴重な機会となりました。',
    tools: [
      {
        title: '使用サービス',
        items: ['Notion'],
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
        items: ['GitHub'],
      },
      {
        title: '使用技術',
        items: ['NextJS', 'JavaScript', 'Tailwind CSS'],
      },
    ],
  },
  {
    title: 'デプロイメント',
    image: '/deployment.jpg',
    description:
      'このプロジェクト「KikaraHP」は、Vercel を利用してホスティングされています。VercelはNext.jsと親和性が高く、ビルド・デプロイの自動化、カスタムドメイン対応、パフォーマンス最適化（CDN配信など）に優れているため、開発・公開のフローがスムーズです。',
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
      link='https://github.com/sanpicule/KikaraHP'
      image='/kikara.png'
      spImage='/kikara_sp.png'
      portfolioTitle='Kikara'
      period='2024年4月 - 2025年1月'
      numberOf={4}
      overview='この制作物は、母の経営する「Kikara」というお店のためのホームページです。エンジニアになった時から、作ってあげたいと考えていたもので、私の最初の個人開発での成果部です！KikaraHP は、静岡県の自然派ライフスタイルショップ「Kikara」のホームページを制作した個人プロジェクトです。Next.js（App Router）とTailwindCSSを使用し、静的なWebサイトながらも再利用性と拡張性を意識した設計を行いました。将来的には予約機能やブログ投稿など、動的機能の追加も視野に入れています。'
      processInfoList={processInfoList}
      summary='この制作物は、母の経営する「Kikara」というお店のためのホームページです。エンジニアになった時から、作ってあげたいと考えていたもので、私の最初の個人開発での成果部です！'
    />
  )
}

export default Index
