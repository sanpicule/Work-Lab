import type { GetStaticProps, NextPage } from "next";
import Layout from '@/components/Layout'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchPages } from "@/utils/notion";
import { IndexProps } from "@/types/types";
import Card from "@/components/Card";


export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};

const TopPage: NextPage<IndexProps> = ({pages}) => {
  return (
    <Layout>
      <Image
        className="w-full max-w-screen-lg mt-12 mx-auto"
        src={'https://images.unsplash.com/photo-1719639445414-03e9eed8587f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        alt=""
        objectFit="cover"
        width={640}
        height={360}
        quality={50}
      />
      <div className='w-full h-auto flex flex-col justify-center pt-24 md:pt-60'>
        <div className='flex items-center gap-4'>
          <span className='w-12 h-[1px] bg-slate-700'></span>
          <p className='text-[24px] md:text-[36px] tracking-wider'>
            {siteConfig.profile}
          </p>
        </div>
        <div className='md:flex w-full mt-24 gap-12 items-start justify-around'>
          <div className='w-full md:w-[50%]'>
            <Image
              className="w-full max-w-screen-lg"
              src='/profile.JPG'
              alt=""
              width={400}
              height={300}
            />
          </div>
          <div className='text-left w-full mt-8 md:mt-0 md:w-1/2'>
            <ruby>
              <p className='text-[36px] md:text-[48px]'>
                檜皮
              </p>
              <rt className="text-sm">
                Hikawa
              </rt>
              <p className='text-[36px] md:text-[48px] ml-4'>
                三四朗
              </p>
              <rt className="text-sm">
                Sanshiro
              </rt>
            </ruby>
            <p className='mt-4 text-lg'>1997年1月4日 生まれ</p>
            <p className='mt-8 text-lg'>2020年にジュピターテレコム株式会社へ新卒入社。2022年8月から株式会社Gizumoに転職し、自治体向けサービス開発に参画。要件定義からテストまでの各工程を経験。現在TLとして新人育成やチーム管理を兼任。エンジニア歴3年目</p>
          </div>
        </div>
      </div>
      <div className='w-full h-auto flex flex-col pt-24 md:pt-60'>
        <div className='flex items-center justify-end gap-4'>
          <p className='text-[24px] md:text-[36px] tracking-wider'>
            {siteConfig.language}
          </p>
          <span className='w-12 h-[1px] bg-slate-700'></span>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-4 gap-12 mt-24'>
          <li className='text-center'>
            <Link href='https://ja.legacy.reactjs.org/'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                  alt=''
                  width={110}
                  height={110}
                />
                <p className='mt-4 text-lg'>React</p>
              </div>
            </Link>
          </li>
          <li className='text-center'>
            <Link href='https://www.typescriptlang.org/'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
                  alt=''
                  width={100}
                  height={100}
                />
                <p className='mt-4 text-lg'>TypeScript</p>
              </div>
            </Link>
          </li>
          <li className='text-center'>
            <Link href='https://nextjs.org/'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src='https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png'
                  alt=''
                  width={100}
                  height={100}
                />
                <p className='mt-4 text-lg'>Next.js</p>
              </div>
            </Link>
          </li>
          <li className='text-center'>
            <Link href='https://www.python.org/'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src='https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png'
                  alt=''
                  width={100}
                  height={100}
                />
                <p className='mt-4 text-lg'>Python</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-full h-auto flex flex-col pt-24 md:pt-60'>
        <div className='flex items-center gap-4'>
          <span className='w-12 h-[1px] bg-slate-700'></span>
          <p className='text-[24px] md:text-[36px] tracking-wider'>
            {siteConfig.articleList}
          </p>
        </div>
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:gap-8 mt-20 md:grid-cols-2 xl:grid-cols-3 w-full my-12 gap-6">
            {/* Card */}
            {pages.map((page, index) => (
              <Card key={index} page={page} />
            ))}
          </div>
        </div>
        <button className="mt-8 md:mt-12 transition duration-300 shadow-md border rounded-xl border-slate-700 py-4 w-64 mx-auto hover:bg-slate-700 hover:text-white">
          MORE
        </button>
      </div>
    </Layout>
  )
}

export default TopPage
