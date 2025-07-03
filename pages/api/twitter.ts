import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // ダミーツイートデータ
  const tweets = [
    {
      id: '1',
      text: 'これはダミーのツイートです。#ポートフォリオ',
      created_at: '2024-06-01T12:00:00Z',
      username: 'SanpiTech240',
      profile_image_url:
        'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
    },
    {
      id: '2',
      text: 'Next.jsとTailwind CSSでポートフォリオを作成中！',
      created_at: '2024-05-30T09:30:00Z',
      username: 'SanpiTech240',
      profile_image_url:
        'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
    },
    {
      id: '3',
      text: 'AIアシスタントと一緒に開発を進めています🤖',
      created_at: '2024-05-28T18:45:00Z',
      username: 'SanpiTech240',
      profile_image_url:
        'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
    },
  ]
  res.status(200).json({ tweets })
}
