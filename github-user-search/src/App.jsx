import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Search from './components/Search'
import UserCard from './components/UserCard'
import { searchUsers } from './services/githubService'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (query) => {
    setError('')
    setLoading(true)
    try {
      const items = await searchUsers(query)
      setUsers(items || [])
    } catch (err) {
      setError(err.message || 'Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'grid', gap: '12px', marginTop: 16 }}>
        {users.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Simple GitHub user search built with React + Vite.</p>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>GitHub User Search</h1>
        <nav>
          <Link to="/" style={{ marginRight: 12 }}>Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer style={{ marginTop: 30, textAlign: 'center', color: '#666' }}>
        <small>Starter app — implement more features next.</small>
      </footer>
    </div>
  )
}
