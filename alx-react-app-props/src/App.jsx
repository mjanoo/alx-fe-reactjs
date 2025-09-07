// src/App.jsx
import UserProfile from './UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h1>User Profile (Context API Example)</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
