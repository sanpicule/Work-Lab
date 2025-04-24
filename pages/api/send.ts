import { EmailTemplate } from '@/components/email-template';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    name,
    furigana,
    email,
    phone,
    content,
  } = req.body;
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
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};