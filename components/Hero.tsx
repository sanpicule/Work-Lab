import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen w-full'>
      <Image
        className='mx-auto object-cover brightness-50 h-full w-full'
        src='/hero.jpg'
        alt=''
        width={2000}
        height={2000}
        quality={100}
      />
      <h1 className='absolute bottom-[40px] md:top-1/2 left-[30px] md:left-[50px] font-bold text-white text-7xl md:text-9xl'>
        Getting<br></br>Started
      </h1>
    </div>
  )
}

export default Hero
