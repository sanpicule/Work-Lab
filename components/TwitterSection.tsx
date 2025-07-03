'use client'

import { useEffect, useState } from 'react'

interface Tweet {
  id: string;
  text: string;
  created_at: string;
  username: string;
  profile_image_url: string;
}

const TwitterSection = () => {
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const res = await fetch('/api/twitter')
        const data = await res.json()
        setTweets(data.tweets)
      } catch (e) {
        setTweets([])
      } finally {
        setLoading(false)
      }
    }
    fetchTweets()
  }, [])

  return (
    <section className="w-full flex flex-col items-center py-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Twitter</h2>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : tweets.length === 0 ? (
        <div className="text-gray-400">ツイートがありません</div>
      ) : (
        <div className="w-full max-w-md flex flex-col gap-4">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="bg-gray-50 rounded-lg shadow p-4 flex gap-3">
              <img
                src={tweet.profile_image_url}
                alt={tweet.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-800">@{tweet.username}</span>
                  <span className="text-xs text-gray-400">{new Date(tweet.created_at).toLocaleString('ja-JP', { dateStyle: 'short', timeStyle: 'short' })}</span>
                </div>
                <p className="text-gray-700 whitespace-pre-line break-words">{tweet.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default TwitterSection
