import Layout from '@/components/Layout'
import PortfolioCard from '@/components/PortfolioCard'
import { siteConfig } from '@/site.config'
import { portfolioList } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopPage = () => {
  const slicedPortfolioList = portfolioList.slice(0, 4)
  return (
    <Layout>
      <div className='w-full h-auto flex flex-col items-center justify-center pt-20'>
        <h1>{siteConfig.profile}</h1>
        <div className='md:flex w-full items-start justify-around gap-20 md:mt-20'>
          <div>
            <Image
              className="w-full max-w-screen-lg rounded-lg aspect-video my-4 mt-10 md:mt-0"
              src='https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=""
              objectFit="cover"
              width={640}
              height={360}
              quality={50}
            />
          </div>
          <span className='h-72 w-0.5 bg-gray-400 md:block'></span>
          <div className='mt-4 text-center md:text-left'>
            <h1>Sanshiro Hikawa</h1>
            <ul className='md:ml-2'>
              <li>
                <h4>所属</h4>
                <p className='md:ml-4'>株式会社Gizumo GiztechPro事業部</p>
              </li>
              <li>
                <h4>経歴</h4>
                <p className='md:ml-4'>ジュピターテレコム（株）</p>
                <p className='md:ml-4'>株式会社Gizumo GiztechPro事業部</p>
              </li>
              <li>
                <h4>参画案件</h4>
                <p className='md:ml-4'>自治体向けウェブサービス開発案件</p>
              </li>
            </ul>
          </div>
        </div>
        <p className='mt-10'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit id harum consequatur expedita consequuntur libero magni aut quae! Ipsum ipsa laborum ut repellat, illum nostrum? Quibusdam facilis earum et ducimus eligendi, voluptatum error nam quaerat culpa minus sunt odit assumenda delectus? Adipisci eos quisquam aspernatur sapiente accusantium? Fuga ipsam culpa quia, tempore ipsum cum corporis ab, facere molestiae ratione incidunt animi nihil, eum atque accusantium. Eius doloremque impedit quia consectetur tempore eligendi nulla, incidunt quas obcaecati debitis dolorem ipsam aperiam facere harum, asperiores, officiis autem nostrum dolores. Nesciunt corrupti porro accusamus maxime dolor non nemo repellendus quas autem. Id itaque blanditiis officia modi labore, asperiores sit nam nobis illo consectetur quibusdam eveniet vero qui nesciunt saepe eaque, quidem impedit alias molestiae perspiciatis quasi inventore? Explicabo, architecto aperiam rem rerum natus cumque corporis beatae deserunt nulla neque a ipsum? Vero consequatur earum ipsa nisi deserunt unde mollitia magni distinctio maiores! Dolorem libero voluptates ipsam sapiente nemo odio quis, nam voluptatum tenetur atque, est maxime, soluta vel nostrum voluptate officiis. Ratione adipisci illum accusantium ipsa repellat quasi dolore, perferendis enim suscipit fuga corrupti magni cupiditate expedita ad atque eos itaque. Quod iste doloremque beatae distinctio iure quas cumque aliquid suscipit exercitationem cupiditate.
        </p>
      </div>
      <div className='w-full h-auto flex flex-col items-center justify-center pt-20'>
        <h1>{siteConfig.language}</h1>
        <ul className='md:flex gap-20 mt-20'>
          <li className='text-center'>
            <Link href='https://ja.legacy.reactjs.org/'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                  alt=''
                  width={110}
                  height={110}
                />
                <p className='mt-4'>React</p>
              </div>
            </Link>
          </li>
          <li className='text-center mt-10 md:mt-0'>
            <Link href='https://www.typescriptlang.org/'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
                  alt=''
                  width={100}
                  height={100}
                />
                <p className='mt-4'>TypeScript</p>
              </div>
            </Link>
          </li>
          <li className='text-center mt-10 md:mt-0'>
            <Link href='https://nextjs.org/'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src='https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png'
                  alt=''
                  width={100}
                  height={100}
                />
                <p className='mt-4'>Next.js</p>
              </div>
            </Link>
          </li>
          <li className='text-center mt-10 md:mt-0'>
            <Link href='https://www.python.org/'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src='https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png'
                  alt=''
                  width={100}
                  height={100}
                />
                <p className='mt-4'>Python</p>
              </div>
            </Link>
          </li>
        </ul>
      </div> 
      <div className='w-full h-auto flex flex-col items-center justify-center pt-20'>
        <h1>{siteConfig.portfolio}</h1>
        <div className="grid md:gap-20 mt-20 md:grid-cols-2 w-full my-12">
          {slicedPortfolioList.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              url={portfolio.url}
              title={portfolio.title}
            />
          ))}
        </div>
        <Link href='/portfolio'>
          <button className='transition border border-black px-12 py-2 md:hover:scale-110'>MORE →</button>
        </Link>
      </div>
    </Layout>
  )
}

export default TopPage
