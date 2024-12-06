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
      <div className="pt-20 text-center">
        <h1>{siteConfig.articleList}</h1>
        <div className="grid gap-6 mt-20 md:grid-cols-2 xl:grid-cols-3 w-full my-12">
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