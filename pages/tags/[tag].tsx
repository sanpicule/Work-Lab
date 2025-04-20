import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Card from '../../components/Card'
import { Params, TagProps } from '../../types/types'
import { fetchPages } from '../../utils/notion'
import { getMultiSelect } from '../../utils/property'
import { caveat } from '@/utils/font';

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
    <div className='w-[80%] md:w-[60%] h-auto my-36 md:my-48 flex flex-col justify-center max-w-6xl mx-auto'>
      <p className={`${caveat.className} text-5xl md:text-8xl tracking-wider font-extralight`}>{`#${tag}`}</p>
      <div className='grid grid-cols-1 gap-3 md:gap-12 lg:gap-10 mt-8 w-full'>
        {/* Card */}
        {pages.map((page, index) => (
          <Card key={index} page={page} />
        ))}
      </div>
    </div>
  )
}

export default Tag
