import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Generate recommendations when the component loads
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p className="text-gray-500">No recommendations available yet.</p>
      ) : (
        recommendations.map((recipe) => (
          <div
            key={recipe.id}
            className="p-3 mb-2 border rounded-lg shadow-sm bg-white"
          >
            <h3 className="font-semibold">{recipe.title}</h3>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
