import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import NotionBlocks from 'notion-block-renderer'

import ArticleMeta from '../../components/ArticleMeta'
import Layout from '../../components/Layout'

import { ArticleProps, Params } from '../../types/types'
import { fetchBlocksByPageId, fetchPages } from '../../utils/notion'
import { getText } from '../../utils/property'

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchPages({})
  const paths = results.map((page: any) => {
    return {
      params: {
        slug: getText(page.properties.slug.rich_text),
      },
    }
  })
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params

  const { results } = await fetchPages({ slug: slug })
  const page = results[0]
  const pageId = page.id
  const { results: blocks } = await fetchBlocksByPageId(pageId)

  return {
    props: {
      page: page,
      blocks: blocks,
    },
    revalidate: 10,
  }
}

const Article: NextPage<ArticleProps> = ({ page, blocks }) => {
  return (
    <Layout>
      <article className='w-full px-8 md:px-20 max-w-6xl pt-[60px] md:pt-0 md:mt-[60px] bg-[#ffffff]'>
        <div className='my-12'>
          <ArticleMeta page={page} />
        </div>
        <div className='my-12 w-[350px] md:w-[700px] lg:w-full'>
          <NotionBlocks blocks={blocks} isCodeHighlighter={true} />
        </div>
      </article>
    </Layout>
  )
}

export default Article
