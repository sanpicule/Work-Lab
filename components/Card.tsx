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
          <div className='relative group rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300'>
            {/* Card Content */}
            <div className='relative z-10 p-5 flex flex-col justify-between h-full'>
              <div>
                <p className='text-xs text-start text-gray-500'>
                  {getDate(page.properties.published.date)}
                </p>
                <h2 className='text-base text-start md:text-lg font-semibold text-gray-800 mt-1'>
                  {getText(page.properties.name.title)}
                </h2>
              </div>

              {/* Tags */}
              <div className='flex flex-wrap gap-2 mt-4'>
                {getMultiSelect(page.properties.tags.multi_select).map(
                  (tag, index) => (
                    <span
                      key={index}
                      className='text-xs md:text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full shadow-sm'
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