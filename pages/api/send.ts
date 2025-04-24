import { EmailTemplate } from '@/components/email-template'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // ✅ POST 以外は拒否
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  try {
    const { name, furigana, email, phone, content } = req.body

    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ['greeeen443460@yahoo.co.jp'],
      subject: 'Portfolioからお問い合わせがありました。',
      react: EmailTemplate({
        name,
        furigana,
        email,
        phone,
        content,
      }),
    })

    if (error) {
      return res.status(400).json(error)
    }

    return res.status(200).json(data)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
