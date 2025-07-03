'use client'

import { motion } from 'framer-motion'
import { ZennArticle } from '@/utils/zenn'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa'
import Image from 'next/image'

interface ZennSectionProps {
  articles: ZennArticle[]
  username: string
}

const ZennSection = ({ articles, username }: ZennSectionProps) => {
  const customAnimate = useCustomAnimation()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  const cleanCdata = (str: string) =>
    str.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '')

  return (
    <div className='relative w-full bg-white px-2 md:px-40 py-16 md:py-32'>
      <SectionTitle title='Articles' />
      <div className='container mx-auto px-4 py-12'>
        <motion.div
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='max-w-6xl mx-auto'
        >
          <div className='text-center mb-12'>
            <motion.a
              href={`https://zenn.dev/${username}`}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              className='inline-flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors'
            >
              <Image
                src='/zenn.png'
                alt='Zenn'
                width={32}
                height={32}
                className='rounded'
              />
              @{username}
            </motion.a>
          </div>

          {Array.isArray(articles) && articles.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
                >
                  {article.thumbnail && (
                    <div className='relative h-48 w-full'>
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        layout='fill'
                        objectFit='cover'
                        className='w-full h-full'
                      />
                    </div>
                  )}

                  <div className='p-6'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-3 line-clamp-2'>
                      {cleanCdata(article.title)}
                    </h3>

                    {article.description && (
                      <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                        {truncateText(cleanCdata(article.description), 120)}
                      </p>
                    )}

                    <div className='flex items-center justify-between text-xs text-gray-500 mb-4'>
                      <div className='flex items-center gap-1'>
                        <FaCalendarAlt />
                        <span>{formatDate(article.pubDate)}</span>
                      </div>
                    </div>

                    <motion.a
                      href={article.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.02 }}
                      className='inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors rounded-full px-4 py-2 font-semibold bg-gray-200'
                    >
                      <FaExternalLinkAlt />
                      記事を読む
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <div className='text-gray-400 text-lg mb-4'>
                記事が見つかりませんでした
              </div>
              <p className='text-gray-500'>
                Zennで記事を投稿すると、ここに表示されます
              </p>
            </div>
          )}

          <div className='text-center mt-8'>
            <motion.a
              href={`https://zenn.dev/${username}`}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              className='inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors font-semibold'
            >
              Zennで見る
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ZennSection
