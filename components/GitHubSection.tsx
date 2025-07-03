'use client'

import { motion } from 'framer-motion'
import { GitHubRepo } from '@/utils/github'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
import { FaGithub, FaStar, FaCode } from 'react-icons/fa'

interface GitHubSectionProps {
  repos: GitHubRepo[]
  username: string
}

const GitHubSection = ({ repos, username }: GitHubSectionProps) => {
  const customAnimate = useCustomAnimation()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      React: '#61dafb',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Vue: '#42b883',
      Go: '#00ADD8',
      Rust: '#dea584',
      Java: '#b07219',
      'C++': '#f34b7d',
      'C#': '#178600',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Swift: '#ffac45',
      Kotlin: '#F18E33',
      Dart: '#00B4AB',
      Scala: '#c22d40',
      R: '#198CE7',
      MATLAB: '#e16737',
      Shell: '#89e051',
      PowerShell: '#012456',
      Dockerfile: '#384d54',
      Makefile: '#427819',
      CMake: '#DA3434',
      Assembly: '#6E4C13',
      'Objective-C': '#438eff',
      Perl: '#0298c3',
      Lua: '#000080',
      Haskell: '#5e5086',
      Clojure: '#db5855',
      Elixir: '#6e4a7e',
      Erlang: '#B83998',
      'F#': '#b845fc',
      OCaml: '#3be133',
      Racket: '#3c5caa',
      Scheme: '#1f4a79',
      Groovy: '#e69f56',
      CoffeeScript: '#244776',
      Elm: '#60B5CC',
      PureScript: '#1D222D',
      Reason: '#ff5847',
      Nim: '#ffc200',
      Crystal: '#000100',
      V: '#4f87c4',
      Zig: '#ec915c',
      Nix: '#7e7eff',
      Guile: '#3fb68b',
      Factor: '#636746',
      Forth: '#341708',
      APL: '#5A8164',
      J: '#9EEDFF',
      K: '#28430A',
      Q: '#0040FF',
      BQN: '#ff2a6f',
      Ioke: '#078193',
      Io: '#a9188d',
      Nu: '#c9df40',
      Opa: '#1427c8',
      Oz: '#fcd7de',
      Pascal: '#E3F171',
      Prolog: '#74283c',
      Rebol: '#358a5b',
      Red: '#f50000',
      Rexx: '#d90e09',
      Ring: '#2D54CB',
      Sage: '#00FF00',
      SAS: '#B34936',
      Sass: '#cf649a',
      Solidity: '#AA6746',
      SourcePawn: '#5c7611',
      SQF: '#3F3F3F',
      Squirrel: '#800000',
      SystemVerilog: '#DAE1C2',
      Tcl: '#e4cc98',
      TeX: '#3D6117',
      Turing: '#cf142b',
      Vala: '#fbe5cd',
      Verilog: '#b2b7f8',
      VHDL: '#adb2cb',
      X10: '#4B6BEF',
      'XBase++': '#403a40',
      XQuery: '#5232e7',
      Yacc: '#4B6C4B',
      ZAP: '#0d665e',
      ZenScript: '#00BCD1',
      Zephir: '#118f9e',
      Zig: '#ec915c',
      ZIL: '#dc75e5',
      Zimpl: '#d67711',
    }
    return colors[language || ''] || '#586069'
  }

  return (
    <div className='relative w-full bg-gray-50 px-10 md:px-40 py-16 md:py-32'>
      <SectionTitle title='GitHub' />
      <div className='container mx-auto px-4 py-12'>
        <motion.div
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='max-w-6xl mx-auto'
        >
          <div className='text-center mb-12'>
            <motion.a
              href={`https://github.com/${username}`}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              className='inline-flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors'
            >
              <FaGithub className='text-3xl' />@{username}
            </motion.a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'
              >
                <div className='flex items-start justify-between mb-3'>
                  <h3 className='text-lg font-semibold text-gray-800 truncate flex-1'>
                    {repo.name}
                  </h3>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-gray-600 transition-colors'
                  >
                    <FaGithub />
                  </a>
                </div>

                {repo.description && (
                  <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                    {repo.description}
                  </p>
                )}

                <div className='flex items-center justify-between text-xs text-gray-500 mb-3'>
                  <div className='flex items-center gap-4'>
                    {repo.language && (
                      <div className='flex items-center gap-1'>
                        <div
                          className='w-3 h-3 rounded-full'
                          style={{
                            backgroundColor: getLanguageColor(repo.language),
                          }}
                        />
                        <span>{repo.language}</span>
                      </div>
                    )}
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400' />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </div>
                  <span>{formatDate(repo.updated_at)}</span>
                </div>

                {repo.topics && repo.topics.length > 0 && (
                  <div className='flex flex-wrap gap-1'>
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                        +{repo.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className='text-center mt-8'>
            <motion.a
              href={`https://github.com/${username}?tab=repositories`}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              className='inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors font-semibold'
            >
              <FaCode />
              すべてのリポジトリを見る
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GitHubSection
