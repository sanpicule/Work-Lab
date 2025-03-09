import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
      <Image
        className='mx-auto object-cover brightness-50'
        src='/hero.jpg'
        alt=''
        width={2000}
        height={2000}
        quality={100}
      />
      <h1 className='absolute top-1/2 left-[30px] md:left-[50px] font-bold text-white text-4xl md:text-9xl'>
        Portforio Of<br></br>Sanshiro
      </h1>
    </div>
  )
}

export default Hero
