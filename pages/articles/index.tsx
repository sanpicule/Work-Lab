import type { GetStaticProps, NextPage } from "next";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { siteConfig } from "../../site.config";
import { IndexProps } from "../../types/types";
import { fetchPages } from "../../utils/notion";
 
export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};
 
const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <div className="pt-12 text-center w-full">
        <div className='flex items-center gap-4'>
          <span className='w-12 h-[1px] bg-slate-700'></span>
          <p className='text-[24px] md:text-[36px] tracking-wider'>
            {siteConfig.articleList}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 w-full my-12">
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
 
export default Home;