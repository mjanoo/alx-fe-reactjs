import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// ✅ Import the new component
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Show the UserProfile card */}
      <UserProfile />

      {/* Keep the old counter demo below, optional */}
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Vite + React + Tailwind 🚀</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
