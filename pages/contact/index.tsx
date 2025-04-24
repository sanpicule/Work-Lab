import SectionTitle from '@/components/SectionTitle'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  furigana: string
  email: string
  phone: string
  content: string
}

const index = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      furigana: '',
      email: '',
      phone: '',
      content: '',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const query = new URLSearchParams(data).toString()
    router.push(`/contact/confirm?${query}`)
  }
  return (
    <div className='w-full md:w-[80%] lg:w-[60%] h-auto my-36 flex flex-col mx-auto justify-center py-4 px-8 md:px-20 max-w-6xl'>
      <SectionTitle title='CONTACT' />
      <div className='md:w-[80%] mx-auto'>
        <p className='text-xs md:text-md text-[#eee] leading-2 md:leading-8 mt-4'>
          この度は興味を持っていただきありがとうございます。
          ご相談やご連絡はこちらのフォームまたは、画面上部のSNSよりお願いいたします。
          内容確認後、折り返しさせていただきます。
        </p>
        <form
          className='flex flex-col gap-8 w-full mx-auto mt-8'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-xs md:text-sm w-1/3 whitespace-nowrap'>
              名前*
            </p>
            <div className='w-full md:w-2/3 flex flex-col'>
              <input
                className={`w-full mt-2 md:mt-0 text-sm rounded-md outline-none text-black caret-black p-2 ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                {...register('name', { required: '必須です' })}
              />
              {errors.name && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-xs md:text-sm w-1/3 whitespace-nowrap'>
              フリガナ*
            </p>
            <div className='w-full md:w-2/3 flex flex-col'>
              <input
                className={`w-full mt-2 md:mt-0 text-sm rounded-md outline-none text-black caret-black p-2 ${errors.furigana ? 'ring-2 ring-red-500' : ''}`}
                {...register('furigana', { required: '必須です' })}
              />
              {errors.furigana && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.furigana.message}
                </p>
              )}
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-xs md:text-sm w-1/3 whitespace-nowrap'>
              メールアドレス*
            </p>
            <div className='w-full md:w-2/3 flex flex-col'>
              <input
                className={`w-full mt-2 md:mt-0 text-sm rounded-md outline-none text-black caret-black p-2 ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                {...register('email', {
                  required: '必須です',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'メールアドレスの形式が正しくありません',
                  },
                })}
              />
              {errors.email && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-xs md:text-sm w-1/3 whitespace-nowrap'>
              電話番号
            </p>
            <div className='w-full md:w-2/3 flex flex-col'>
              <input className='w-full mt-2 md:mt-0 text-sm rounded-md outline-none text-black caret-black p-2' />
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center'>
            <p className='text-xs w-full md:w-1/3 whitespace-nowrap'>
              内容*
            </p>
            <div className='w-full md:w-2/3 flex flex-col'>
              <textarea
                className={`w-full mt-2 md:mt-0 text-sm rounded-md outline-none text-black caret-black p-2 ${errors.content ? 'ring-2 ring-red-500' : ''} resize-none`}
                rows={4}
                onInput={(e) => {
                  ;(e.target as HTMLTextAreaElement).style.height = 'auto'
                  ;(e.target as HTMLTextAreaElement).style.height =
                    `${(e.target as HTMLTextAreaElement).scrollHeight}px`
                }}
                {...register('content', { required: '必須です' })}
              />
              {errors.content && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.content.message}
                </p>
              )}
            </div>
          </div>
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
              textAlign: 'center',
              mt: '3rem',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
            type='submit'
          >
            内容を確認する
          </Button>
        </form>
      </div>
    </div>
  )
}

export default index
