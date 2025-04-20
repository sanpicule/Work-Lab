import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { CardProps } from '../types/types'
import { getDate, getMultiSelect, getText } from '@/utils/property'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import { motion } from 'framer-motion'
import { getPhotoData } from '@/hooks/useGetRandomPicture'

const Card: FC<CardProps> = ({ page }) => {
  const [url, setUrl] = useState<string | null>(null)
  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await getPhotoData()
      setUrl(res)
    }

    fetchPhoto()
  }, [])
  const customAnimate = useCustomAnimation()
  return (
    <>
      {url && (
        <motion.div
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
        >
          <Link
            href={`/articles/${getText(page.properties.slug.rich_text)}`}
            scroll={false}
          >
            <div className='relative h-full group'>
              {/* グラデーション影（ホバー時のみ表示） */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 blur-2xl rounded-md transition-opacity duration-300 group-hover:opacity-60 pointer-events-none'></div>

              {/* コンテンツ本体 */}
              <div className='relative z-10 transition duration-200 flex flex-col rounded-2xl h-full p-4 shadow-2xl bg-[#1e1e1e]'>
                <div className='text-start'>
                  <p className='text-xs text-gray-400'>
                    {getDate(page.properties.published.date)}
                  </p>
                  <p className='text-sm md:text-[16px] font-bold mt-2 text-[#eee]'>
                    {getText(page.properties.name.title)}
                  </p>
                </div>
                {/* tag */}
                <div className='flex flex-wrap mt-4'>
                  {getMultiSelect(page.properties.tags.multi_select).map(
                    (tag, index) => (
                      <span
                        key={index}
                        className='text-xs md:text-sm px-2 py-[1px] bg-gray-200 text-[#464545] rounded-md break-words mr-2 mb-2'
                      >
                        {`#${tag}`}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </>
  )
}

export default Card
