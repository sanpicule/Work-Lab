import { ArticleMetaProps } from '@/types/types'
import { getDate, getMultiSelect, getText } from '@/utils/property'
import Link from 'next/link'
import React from 'react'

const ArticleMeta: React.FC<ArticleMetaProps> = ({ page }) => {
  return (
    <>
      {/* page name */}
      <h2 className='my-8'>{getText(page.properties.name.title)}</h2>
      <div className='bg-gray-100 px-6 py-4 rounded text-sm text-gray-500'>
        <div className='grid grid-cols-3 gap-4'>
          {/* published */}
          <div className='col-span-1'>Published</div>
          <div className='col-span-2'>
            {getDate(page.properties.published.date)}
          </div>

          {/* author */}
          <div className='col-span-1'>Author</div>
          <div className='col-span-2'>
            {getText(page.properties.author.rich_text)}
          </div>

          {/* tags */}
          <div>Tags</div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {getMultiSelect(page.properties.tags.multi_select).map(
              (tag: string, index: number) => (
                <Link key={index} href={`/tags/${tag}`} scroll={false}>
                  <span className='text-gray-700 no-underline border-b border-solid border-gray-700 opacity-70 '>
                    {`#${tag}`}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleMeta
