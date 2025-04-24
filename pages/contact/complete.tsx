import SectionTitle from '@/components/SectionTitle'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const Complete = () => {
  const router = useRouter()
  return (
    <div className='w-full max-w-6xl mx-auto my-36 px-4 md:px-10 lg:px-20'>
      <div className='flex flex-col items-center'>
        <SectionTitle title='CONTACT' />

        <div className='w-full md:w-4/5 mt-6 text-start'>
          <p className='text-xs md:text-md text-[#eee] leading-2 md:leading-8 mt-4'>
            問い合わせ内容が送信されました！ <br></br>返信をお待ちください。
          </p>
          <Button
            sx={{
              cursor: 'pointer',
              background: 'linear-gradient(to right, #7D4ECF, #CD47DF)',
              width: '300px',
              borderRadius: '10px',
              fontSize: '0.875rem',
              color: 'white',
              padding: '13px 20px',
              display: 'block',
              mx: 'auto',
              mt: '3rem',
              textAlign: 'center',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => {
              router.push('/')
            }}
          >
            トップへ戻る
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Complete
