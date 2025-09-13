import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h2>Recipe Details</h2>
      <p>Currently viewing recipe with ID: <strong>{id}</strong></p>
    </div>
  );
};

export default RecipeDetails;
