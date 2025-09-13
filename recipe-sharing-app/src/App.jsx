import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm'; 
import RecipeList from './components/RecipeList'; // ✅ required import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ use AddRecipeForm and RecipeList directly here for quiz */}
        <Route 
          path="/" 
          element={
            <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
              <h1>🍲 Recipe Sharing App</h1>
              <AddRecipeForm />
              <RecipeList />
            </div>
          } 
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
