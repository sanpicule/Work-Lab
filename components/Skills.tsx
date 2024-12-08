import React, { useState } from 'react'
import { siteConfig } from '@/site.config'
import Link from 'next/link'
import Image from 'next/image'
import { skillList } from '@/utils/data'
import { Skill } from '@/types/types'

export const Skills = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [targetSkill, setTargetSkill] = useState<Skill>({
    skillName: '',
    officialUrl: '',
    imageUrl: '',
    description: ''
  })
  return (
    <div className='w-full h-auto flex flex-col mt-12 md:pt-60'>
      <div className='flex items-center justify-end gap-4'>
        <p className='text-[24px] md:text-[36px] tracking-wider'>
          {siteConfig.language}
        </p>
        <span className='w-12 h-[1px] bg-slate-700'></span>
      </div>
      <ul className='grid grid-cols-1 gap-12 mt-12 md:mt-24'>
        {skillList.map((skill) => (
          <li key={skill.skillName} className='text-center'>
            <Link href={skill.officialUrl}>
              <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
                <div className="flex flex-col w-1/3 items-center justify-center">
                  <Image
                    src={skill.imageUrl}
                    alt=''
                    width={110}
                    height={110}
                  />
                  <p className='mt-4 text-lg'>{skill.skillName}</p>
                </div>
                <p className="hidden md:block text-start text-lg w-2/3">{skill.description}</p>
              </div>
            </Link>
            <button
              onClick={() => {
                setIsOpen(true)
                setTargetSkill(skill)
              }}
              className='bg-slate-200 md:hidden rounded-md p-2 mt-4'
            >
              <p>
                実績を見る
              </p>
            </button>
          </li>
        ))}
      </ul>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-72 p-6">
            <h2 className="text-lg font-bold mb-4">{targetSkill.skillName}</h2>
            <p className="text-gray-700 mb-4">
              {targetSkill.description}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-slate-700 rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
