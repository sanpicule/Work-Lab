import { ArticleMetaProps } from '@/types/types'
import { getDate, getMultiSelect, getText } from '@/utils/property'
import Link from 'next/link'
import React from 'react'

const ArticleMeta: React.FC<ArticleMetaProps> = ({ page }) => {
  return (
    <>
      {/* page name */}
      <h2 className='my-8 text-2xl md:text-3xl'>{getText(page.properties.name.title)}</h2>
      <div className='w-full px-6 py-4 rounded-xl text-sm text-white bg-gradient-to-br from-indigo-500/80 to-purple-600/80 backdrop-blur-md shadow-lg'>
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
                <Link key={index} href={`/tags/${tag}`} scroll={false} legacyBehavior>
                  <a className='border-b border-slate-500 text-[12px] md:text-[14px]'>
                    {`#${tag}`}
                  </a>
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
