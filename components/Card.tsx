import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { CardProps } from '../types/types'
import { getCover, getDate, getMultiSelect, getText } from '@/utils/property'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getPhotoData } from '@/hooks/useGetRandomPicture'

const Card: FC<CardProps> = ({ page }) => {
  const [url, setUrl] = useState<string>('')
  useEffect(() => {
  const fetchPhoto = async () => {
    const res = await getPhotoData()
    console.log(res)
    setUrl(res)
  };

  fetchPhoto();
}, [])
  const customAnimate = useCustomAnimation()
  return (
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
        <div className='transition duration-200 hover:md:scale-[105%] flex flex-col hover:md:shadow-[0px_0px_15px_0px_#2445a1] overflow-hidden bg-white w-full shadow-lg rounded-lg h-full'>
          <div className='w-full h-[150px] md:h-[120px]'>
            <Image
              className='object-cover h-full w-full'
              src={getCover(page.cover) || url}
              alt=''
              width={400}
              height={225}
              quality={30}
            />
          </div>
          {/* title & date*/}
          <div className='px-6 pt-4 text-start'>
            <p>{getDate(page.properties.published.date)}</p>
            <h4 className='text-[16px] font-bold'>
              {getText(page.properties.name.title)}
            </h4>
          </div>
          {/* tag */}
          <div className='flex flex-wrap mt-4 px-2 pb-4'>
            {getMultiSelect(page.properties.tags.multi_select).map(
              (tag, index) => (
                <span
                  key={index}
                  className='text-xs md:text-sm px-2 py-[1px] bg-gray-200 rounded-md break-words mr-2 mb-2'
                >
                  {`#${tag}`}
                </span>
              )
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default Card
