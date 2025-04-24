import SectionTitle from '@/components/SectionTitle'
import { Button } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const Confirm = () => {
  const params = useSearchParams()
  const router = useRouter()
  const [isSending, setIsSending] = useState(false)

  const name = params.get('name')
  const furigana = params.get('furigana')
  const email = params.get('email')
  const phone = params.get('phone')
  const content = params.get('content')

  const handleSendMail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsSending(true)

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          furigana,
          email,
          phone,
          content,
        }),
      })

      if (res.status === 200) {
        router.push('./complete')
      } else {
        window.alert('メールの送信に失敗しました。')
      }
    } catch (error) {
      console.error('送信中にエラーが発生しました:', error)
      window.alert('ネットワークエラーが発生しました。')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className='w-full md:w-[80%] lg:w-[60%] h-auto my-36 flex flex-col mx-auto justify-center py-4 px-8 md:px-20 max-w-6xl'>
      <SectionTitle title='CONTACT' />
      <div className='md:w-[80%] mx-auto'>
        <p className='text-xs md:text-md text-[#eee] leading-2 md:leading-8 mt-4'>
          内容の確認をしていただき、間違いがない場合は送信ボタンを押してください。
          sannsi4444@gmail.comよりメールでご返信させていただきます。
        </p>
        <form className='flex flex-col gap-8 w-full mx-auto mt-8'>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-md w-1/3 whitespace-nowrap font-bold'>名前</p>
            <p className='text-sm p-[2px] w-full md:w-2/3'>{name}</p>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-md w-1/3 whitespace-nowrap font-bold'>
              フリガナ
            </p>
            <p className='text-sm p-[2px] w-full md:w-2/3'>{furigana}</p>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-md w-1/3 whitespace-nowrap font-bold'>
              メールアドレス
            </p>
            <p className='text-sm p-[2px] w-full md:w-2/3'>{email}</p>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-md w-1/3 whitespace-nowrap font-bold'>
              電話番号
            </p>
            <p className='text-sm p-[2px] w-full md:w-2/3'>{phone}</p>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-md w-full md:w-1/3 whitespace-nowrap font-bold'>
              内容
            </p>
            <p className='text-sm p-[2px] w-full md:w-2/3'>{content}</p>
          </div>
          <Button
            onClick={handleSendMail}
            disabled={isSending}
            loading={isSending}
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
              textAlign: 'center',
              mt: '3rem',
              opacity: isSending ? 0.6 : 1,
              pointerEvents: isSending ? 'none' : 'auto',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            送信
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Confirm
