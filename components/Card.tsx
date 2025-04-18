import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { CardProps } from '../types/types'
import { getCover, getDate, getMultiSelect, getText } from '@/utils/property'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getPhotoData } from '@/hooks/useGetRandomPicture'

const Card: FC<CardProps> = ({ page }) => {
  const [url, setUrl] = useState<string | null>(null)
  useEffect(() => {
  const fetchPhoto = async () => {
    const res = await getPhotoData()
    setUrl(res)
  };

  fetchPhoto();
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
            <div className='transition duration-200 flex flex-col rounded-md md:hover:shadow-[0px_0px_10px_0px_#efbebe] h-full p-4 shadow-2xl'>
              {/* <div className='w-full h-[75px] md:h-[120px]'>
                <Image
                  className='object-cover h-full w-full'
                  src={getCover(page.cover) ?? url}
                  alt=''
                  width={400}
                  height={225}
                  quality={30}
                />
              </div> */}
              {/* title & date*/}
              <div className='text-start'>
                <p className='text-xs text-gray-400'>{getDate(page.properties.published.date)}</p>
                <p className='text-sm md:text-[16px] font-bold mt-2 text-[#eee]'>
                  {getText(page.properties.name.title)}
                </p>
              </div>
              {/* tag */}
              <div className='flex flex-wrap mt-4 pb-4'>
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
          </Link>
        </motion.div>
      )}
    </>
  )
}

export default Card
