import type { GetStaticProps, NextPage } from "next";
import Layout from '@/components/Layout'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { fetchPages } from "@/utils/notion";
import { IndexProps } from "@/types/types";
import Card from "@/components/Card";
import { Skills } from "@/components/Skills";
import { SnsIcons } from "@/components/SnsIcons";


export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({ maxRange: 3 });
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
        className="w-full h-52 max-w-screen-lg mt-12 mx-auto object-cover"
        src={'https://images.unsplash.com/photo-1719639445414-03e9eed8587f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        alt=""
        width={640}
        height={360}
        quality={50}
      />
      <div className='w-full h-auto flex flex-col justify-center mt-24'>
        <div className='flex items-center gap-4'>
          <span className='w-12 h-[1px] bg-slate-700'></span>
          <p className='text-[24px] md:text-[36px]'>
            {siteConfig.profile}
          </p>
        </div>
        <div className='md:flex w-full mt-8 md:mt-12 gap-12 items-start justify-around'>
          <div className='w-full md:w-[50%]'>
            <Image
              className="w-full max-w-screen-lg grayscale"
              src='/profile.jpeg'
              alt=""
              width={400}
              height={300}
            />
          </div>
          <div className='text-left w-full mt-4 md:mt-0 md:w-1/2'>
            <p className='text-[36px] md:text-[48px] italic'>
              H.Sanshiro
            </p>
            <p className='mt-2 md:text-[16px]'>1997年1月4日 生まれ</p>
            <p className='mt-4 md:text-[16px]'>2020年にジュピターテレコム株式会社へ新卒入社。2022年8月から株式会社Gizumoに転職し、自治体向けサービス開発に参画。要件定義からテストまでの各工程を経験。現在TLとして新人育成やチーム管理を兼任。エンジニア歴3年目</p>
            <SnsIcons />
          </div>
        </div>
      </div>
      <Skills />
      <div className='w-full h-auto flex flex-col mt-36'>
        <div className='flex items-center gap-4'>
          <span className='w-12 h-[1px] bg-slate-700'></span>
          <p className='text-[24px] md:text-[36px]'>
            {siteConfig.articleList}
          </p>
        </div>
        <Link href={'/articles'} className="ml-auto mt-12" scroll={false}>
          <button className="transition duration-300 border text-sm md:text-base rounded-full border-slate-700 py-2 px-4 hover:bg-slate-700 hover:text-white hover:translate-x-2">
            記事をもっと見る
          </button>
        </Link>
        <div className="text-center mt-4 md:mt-12">
          <div className="grid grid-cols-1 w-full mb-12 gap-4">
            {/* Card */}
            {pages.map((page, index) => (
              <Card key={index} page={page} />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full h-auto flex flex-col mt-36'>
        <div className='flex items-center justify-end gap-4'>
          <p className='text-[24px] md:text-[36px]'>
            {siteConfig.portfolio}
          </p>
          <span className='w-12 h-[1px] bg-slate-700'></span>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link href={'https://kikara-official.vercel.app/'} target="_blank">
            <div className="flex flex-col items-center justify-center gap-4 border border-slate-700 p-4">
              <div className="relative transition duration-500 w-full h-full rounded-sm cursor-pointer overflow-hidden hover:shadow-2xl hover:-translate-x-1 hover:-translate-y-1">
                <Image
                  src={'/portforio1.png'}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <p>Kikara: Next.jsで作製したホームページ</p>
            </div>
          </Link>
          <Link href={'https://tinypost-three.vercel.app/'} target="_blank">
            <div className="flex flex-col items-center justify-center gap-4 border border-slate-700 p-4">
              <div className="relative transition duration-500 w-full h-full rounded-sm cursor-pointer overflow-hidden hover:shadow-2xl hover:-translate-x-1 hover:-translate-y-1">
                <Image
                  src={'/portforio2.png'}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <p>TinyPost: 簡易CMS</p>
            </div>
          </Link>
          <Link href={'https://sp-link.vercel.app/'} target="_blank">
            <div className="flex flex-col items-center justify-center gap-4 border border-slate-700 p-4">
              <div className="relative transition duration-500 w-full h-full rounded-sm cursor-pointer overflow-hidden hover:shadow-2xl hover:-translate-x-1 hover:-translate-y-1">
                <Image
                  src={'/portforio3.png'}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <p>PostingProfile: このポートフォリオサイト</p>
            </div>
          </Link>
          <Link href={'https://notion-blog-gray-theta.vercel.app/'} target="_blank">
            <div className="flex flex-col items-center justify-center gap-4 border border-slate-700 p-4">
              <div className="relative transition duration-500 w-full h-full rounded-sm cursor-pointer overflow-hidden hover:shadow-2xl hover:-translate-x-1 hover:-translate-y-1">
                <Image
                  src={'/portforio4.png'}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <p>PostingProfile: このポートフォリオサイト</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default TopPage
