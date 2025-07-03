import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import PortfolioDetail, {
  PortfolioDetailProps,
} from '@/components/PortfolioDetail'
import { portfolioDetails } from '@/utils/data'

interface Props {
  detail: PortfolioDetailProps
}

const PortfolioDetailPage: NextPage<Props> = ({ detail }) => {
  return <PortfolioDetail {...detail} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = Object.keys(portfolioDetails)
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string }
  const detail = portfolioDetails[id]
  if (!detail) {
    return { notFound: true }
  }
  return {
    props: { detail },
  }
}

export default PortfolioDetailPage
