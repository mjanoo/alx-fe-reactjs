import './App.css';

// Import your components
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      
      {/* Display WelcomeMessage */}
      <WelcomeMessage />

      {/* Main Components */}
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      {/* Counter Component */}
      <Counter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
