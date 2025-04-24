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
    url && (
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial='initial'
        whileInView='whileInView'
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='w-full h-full'
      >
        <Link
          href={`/articles/${getText(page.properties.slug.rich_text)}`}
          scroll={false}
          className='block'
        >
          <div className='relative group rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#1e1e2f] to-[#2e2e3f] hover:shadow-2xl transition-all duration-300'>
            {/* Hover Gradient Glow */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none z-0' />

            {/* Card Content */}
            <div className='relative z-10 p-5 flex flex-col justify-between h-full'>
              <div>
                <p className='text-xs text-start text-gray-400'>
                  {getDate(page.properties.published.date)}
                </p>
                <h2 className='text-base text-start md:text-lg font-semibold text-white mt-1'>
                  {getText(page.properties.name.title)}
                </h2>
              </div>

              {/* Tags */}
              <div className='flex flex-wrap gap-2 mt-4'>
                {getMultiSelect(page.properties.tags.multi_select).map(
                  (tag, index) => (
                    <span
                      key={index}
                      className='text-xs md:text-sm bg-gradient-to-r from-blue-400/60 to-purple-500/60 text-white px-3 py-1 rounded-full shadow-sm hover:shadow-md transition duration-200'
                    >
                      #{tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    )
  )
}

export default Card
