import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import Image from 'next/image'

export const SnsIcons = () => {
  return (
    <div className='flex gap-3 mt-2 flex-wrap'>
      {/* Twitter */}
      <a
        href='https://x.com/sanpitech240?s=21'
        target='_blank'
        rel='noopener noreferrer'
        className='flex gap-2 items-center bg-[#1DA1F2] py-1 px-2 md:px-4 rounded-md text-white hover:brightness-90'
      >
        <TwitterIcon fontSize='medium' />
        <p className='font-medium md:text-lg'>Twitter</p>
      </a>
      {/* Github */}
      <a
        href='https://github.com/sanpicule?tab=repositories'
        target='_blank'
        rel='noopener noreferrer'
        className='flex gap-2 items-center bg-[#333333] py-1 px-2 md:px-4 rounded-md text-white hover:brightness-90'
      >
        <GitHubIcon fontSize='medium' />
        <p className='font-medium md:text-lg'>GitHub</p>
      </a>
      {/* Zenn */}
      <a
        href='https://zenn.dev/sanpi34'
        target='_blank'
        rel='noopener noreferrer'
        className='flex gap-2 items-center bg-white py-1 px-2 md:px-4 rounded-md text-black hover:brightness-90'
      >
        <Image src='/logo-only.svg' width={25} height={25} alt='Zenn logo' />
        <p className='font-medium md:text-lg'>Zenn</p>
      </a>
    </div>
  )
}
