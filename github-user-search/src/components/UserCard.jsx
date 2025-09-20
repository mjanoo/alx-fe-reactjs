import React from 'react'

export default function UserCard({ user }) {
  return (
    <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 12,
      border: '1px solid #eee',
      borderRadius: 8
    }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        width={64}
        height={64}
        style={{ borderRadius: 8 }}
      />
      <div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 600 }}
        >
          {user.login}
        </a>
        <div style={{ color: '#555' }}>
          Score: {user.score?.toFixed ? user.score.toFixed(1) : user.score}
        </div>
      </div>
    </div>
  )
}
