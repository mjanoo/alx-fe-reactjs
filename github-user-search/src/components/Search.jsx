import React, { useState } from 'react'

export default function Search({ onSearch }) {
  const [q, setQ] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const trimmed = q.trim()
    if (!trimmed) return
    onSearch(trimmed)
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8 }}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder='Search GitHub users (e.g. "octocat")'
        style={{ flex: 1, padding: '8px 10px', fontSize: 16 }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
    </form>
  )
}
