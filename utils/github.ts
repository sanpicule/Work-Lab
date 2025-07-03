export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
  topics: string[]
  fork: boolean
}

export interface GitHubRepoDetail extends GitHubRepo {
  languages: { [key: string]: number }
  topics: string[]
  homepage: string | null
  size: number
  open_issues_count: number
  forks_count: number
  watchers_count: number
  created_at: string
  pushed_at: string
}

export async function fetchGitHubRepos(
  username: string,
  token?: string
): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
    }

    if (token) {
      headers['Authorization'] = `token ${token}`
    }

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { headers }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // フォークしたリポジトリを除外し、スター数でソート
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export async function fetchGitHubRepoDetail(
  repoName: string,
  username: string,
  token?: string
): Promise<GitHubRepoDetail | null> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
    }

    if (token) {
      headers['Authorization'] = `token ${token}`
    }

    // リポジトリの基本情報を取得
    const repoResponse = await fetch(
      `https://api.github.com/repos/${username}/${repoName}`,
      { headers }
    )

    if (!repoResponse.ok) {
      throw new Error(`GitHub API error: ${repoResponse.status}`)
    }

    const repo: GitHubRepoDetail = await repoResponse.json()

    // 言語情報を取得
    const languagesResponse = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/languages`,
      { headers }
    )

    if (languagesResponse.ok) {
      repo.languages = await languagesResponse.json()
    }

    return repo
  } catch (error) {
    console.error('Error fetching GitHub repo detail:', error)
    return null
  }
}

export async function fetchGitHubProfile(username: string, token?: string) {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
    }

    if (token) {
      headers['Authorization'] = `token ${token}`
    }

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers,
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub profile:', error)
    return null
  }
}
