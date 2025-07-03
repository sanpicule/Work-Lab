export interface ZennArticle {
  title: string
  link: string
  description: string
  pubDate: string
  thumbnail?: string
}

export async function fetchZennArticles(
  username: string
): Promise<ZennArticle[]> {
  try {
    const response = await fetch(`https://zenn.dev/${username}/feed`)

    if (!response.ok) {
      throw new Error(`Zenn RSS error: ${response.status}`)
    }

    const xmlText = await response.text()
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml')

    const items = xmlDoc.querySelectorAll('item')
    const articles: ZennArticle[] = []

    items.forEach((item) => {
      const title = item.querySelector('title')?.textContent || ''
      const link = item.querySelector('link')?.textContent || ''
      const description = item.querySelector('description')?.textContent || ''
      const pubDate = item.querySelector('pubDate')?.textContent || ''

      // サムネイル画像を抽出（descriptionから）
      const thumbnailMatch = description.match(/<img[^>]+src="([^"]+)"/)
      const thumbnail = thumbnailMatch ? thumbnailMatch[1] : undefined

      articles.push({
        title,
        link,
        description: description.replace(/<[^>]*>/g, ''), // HTMLタグを除去
        pubDate,
        thumbnail,
      })
    })

    return articles.slice(0, 6) // 最新6件まで
  } catch (error) {
    console.error('Error fetching Zenn articles:', error)
    return []
  }
}

// サーバーサイド用のRSSパーサー（Node.js環境）
export async function fetchZennArticlesServer(
  username: string
): Promise<ZennArticle[]> {
  try {
    const response = await fetch(`https://zenn.dev/${username}/feed`)

    if (!response.ok) {
      throw new Error(`Zenn RSS error: ${response.status}`)
    }

    const xmlText = await response.text()

    // 簡易的なXMLパース（本格的な実装ではxml2jsなどのライブラリを使用）
    const articles: ZennArticle[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    const titleRegex = /<title>(.*?)<\/title>/
    const linkRegex = /<link>(.*?)<\/link>/
    const descriptionRegex = /<description>(.*?)<\/description>/
    const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/

    let match
    while ((match = itemRegex.exec(xmlText)) !== null && articles.length < 6) {
      const itemContent = match[1]

      const title = titleRegex.exec(itemContent)?.[1] || ''
      const link = linkRegex.exec(itemContent)?.[1] || ''
      const description = descriptionRegex.exec(itemContent)?.[1] || ''
      const pubDate = pubDateRegex.exec(itemContent)?.[1] || ''

      // サムネイル画像を抽出
      const thumbnailMatch = description.match(/<img[^>]+src="([^"]+)"/)
      const thumbnail = thumbnailMatch ? thumbnailMatch[1] : null

      articles.push({
        title,
        link,
        description: description.replace(/<[^>]*>/g, ''),
        pubDate,
        thumbnail,
      })
    }

    return articles
  } catch (error) {
    console.error('Error fetching Zenn articles:', error)
    return []
  }
}
