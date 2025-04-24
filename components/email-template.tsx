import * as React from 'react';

interface EmailTemplateProps {
  name: string
  furigana: string
  email: string
  phone: string
  content: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, 
  furigana, 
  email, 
  phone, 
  content, 
}) => (
  <div>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>お問い合わせ内容</h1>
    <p style={{ fontSize: '16px', margin: '10px 0' }}>
      名前: {name}
    </p>
    <p style={{ fontSize: '16px', margin: '10px 0' }}>
      フリガナ: {furigana}
    </p>
    <p style={{ fontSize: '16px', margin: '10px 0' }}>
      メールアドレス: {email}
    </p>
    <p style={{ fontSize: '16px', margin: '10px 0' }}>
      電話番号: {phone}
    </p>
    <p style={{ fontSize: '16px', margin: '10px 0' }}>
      内容: {content}
    </p>
  </div>
);