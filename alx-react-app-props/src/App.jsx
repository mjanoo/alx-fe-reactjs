// src/App.jsx
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  // User data to be shared via Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h1>User Profile (Context API Example)</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
