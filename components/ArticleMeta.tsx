import { ArticleMetaProps } from '@/types/types'
import { getDate, getMultiSelect, getText } from '@/utils/property'
import Link from 'next/link'
import React from 'react'

const ArticleMeta: React.FC<ArticleMetaProps> = ({ page }) => {
  return (
    <>
      {/* page name */}
      <h2 className='my-8'>{getText(page.properties.name.title)}</h2>
      <div className='bg-gray-100 px-6 py-4 rounded text-sm text-gray-500 w-full'>
        {/* published */}
        <div className='flex items-center gap-4'>
          <div className='w-[100px]'>Published</div>
          <div>{getDate(page.properties.published.date)}</div>
        </div>
        {/* author */}
        <div className='flex items-center gap-4 mt-2'>
          <div className='w-[100px]'>Author</div>
          <div>{getText(page.properties.author.rich_text)}</div>
        </div>
        {/* tags */}
        <div className='flex items-start gap-4 mt-2'>
          <div className='w-[100px]'>Tags</div>
          <div className='flex flex-wrap gap-4'>
            {getMultiSelect(page.properties.tags.multi_select).map(
              (tag: string, index: number) => (
                <Link key={index} href={`/tags/${tag}`} scroll={false}>
                  <p className='text-slate-700 border-b border-slate-500 text-[12px] md:text-[14px]'>
                    {`#${tag}`}
                  </p>
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
