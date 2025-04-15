import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { fetchPages } from '@/utils/notion'
import { IndexProps } from '@/types/types'
import { Skills } from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import HomeArticles from '@/components/HomeArticles'
import Profile from '@/components/Profile'
import Hero from '@/components/Hero'

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({ maxRange: 4 })
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  }
}

const TopPage: NextPage<IndexProps> = ({ pages }) => {
  return (
    <>
      <Hero />
      <Profile />
      <Portfolio />
      <Skills />
      <HomeArticles pages={pages} />
    </>
  )
}

export default TopPage
