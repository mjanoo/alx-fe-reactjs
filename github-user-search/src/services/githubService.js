import axios from 'axios'

const GITHUB_BASE = 'https://api.github.com'
const token = import.meta.env.VITE_APP_GITHUB_API_KEY

const client = axios.create({
  baseURL: GITHUB_BASE,
  headers: token ? { Authorization: `token ${token}` } : {},
})

export async function searchUsers(q) {
  if (!q) return []
  const res = await client.get('/search/users', { params: { q } })
  return res.data.items || []
}
