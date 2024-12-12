
import React from 'react'
import Card from "@/components/Card";
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import type { NextPage } from "next";
import { IndexProps } from '@/types/types';

const HomeArticles: NextPage<IndexProps> = ({pages}) => {
  return (
    <div className='w-full h-auto flex flex-col mt-36'>
        <div className='flex items-center gap-4'>
          <span className='w-12 h-[1px] bg-slate-700'></span>
          <p className='text-[24px] md:text-[36px]'>
            {siteConfig.articleList}
          </p>
        </div>
        <div className="text-center mt-4 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
            {/* Card */}
            {pages.map((page, index) => (
              <Card key={index} page={page} />
            ))}
          </div>
        </div>
        <Link href={'/articles'} className="ml-auto mt-8" scroll={false}>
          <button className="transition duration-300 border text-sm md:text-base rounded-full border-slate-700 py-2 px-4 hover:bg-slate-700 hover:text-white hover:translate-x-2">
            記事をもっと見る
          </button>
        </Link>
      </div>
  )
}

export default HomeArticles
