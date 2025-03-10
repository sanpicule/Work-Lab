import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import { Params, TagProps } from '../../types/types'
import { fetchPages } from '../../utils/notion'
import { getMultiSelect } from '../../utils/property'

export const getStaticPaths: GetStaticPaths = async () => {
  const { results }: { results: Record<string, any>[] } = await fetchPages({})

  const pathSet: Set<string> = new Set()
  for (const page of results) {
    for (const tag of getMultiSelect(page.properties.tags.multi_select)) {
      pathSet.add(tag)
    }
  }

  const paths = Array.from(pathSet).map((tag) => {
    return {
      params: {
        tag: tag,
      },
    }
  })

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { tag } = ctx.params as Params
  const { results } = await fetchPages({ tag: tag })
  return {
    props: {
      pages: results ? results : [],
      tag: tag,
    },
    revalidate: 10,
  }
}

const Tag: NextPage<TagProps> = ({ pages, tag }) => {
  return (
    <Layout>
      <div className='w-full py-12 px-8 md:px-20 max-w-6xl mt-[80px]'>
        <p className='mb-8 text-6xl'>{`#${tag}`}</p>
        <div className='grid gap-8 mt-10 grid-cols-1 md:grid-cols-3 w-full my-12'>
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Tag
