import AddRecipeForm from '../components/AddRecipeForm';
import RecipeList from '../components/RecipeList';

const Home = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default Home;
