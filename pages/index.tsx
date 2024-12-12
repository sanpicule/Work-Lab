import type { GetStaticProps, NextPage } from "next";
import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'
import { fetchPages } from "@/utils/notion";
import { IndexProps } from "@/types/types";
import { Skills } from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import HomeArticles from "@/components/HomeArticles";
import Profile from "@/components/Profile";


export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({ maxRange: 4 });
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
      <Profile />
      <Skills />
      <HomeArticles pages={pages}></HomeArticles>
      <Portfolio />
    </Layout>
  )
}

export default TopPage
