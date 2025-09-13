import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm'; // ✅ imported for quiz

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        {/* optional: you could add a route for AddRecipeForm if needed */}
        {/* <Route path="/add" element={<AddRecipeForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
