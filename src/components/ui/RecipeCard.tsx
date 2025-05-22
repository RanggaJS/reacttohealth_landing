import React from 'react';
import { Clock, Award, Flame } from 'lucide-react';
import { Recipe } from '../../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const dietTypeColors: Record<string, string> = {
    vegetarian: 'bg-green-100 text-green-800',
    vegan: 'bg-emerald-100 text-emerald-800',
    keto: 'bg-blue-100 text-blue-800',
    paleo: 'bg-amber-100 text-amber-800',
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${dietTypeColors[recipe.dietType]}`}>
            {recipe.dietType.charAt(0).toUpperCase() + recipe.dietType.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{recipe.prepTime} min</span>
          </div>
          <div className="flex items-center">
            <Flame className="w-4 h-4 mr-1" />
            <span>{recipe.calories} cal</span>
          </div>
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-1" />
            <span>★ {recipe.rating}/5</span>
          </div>
        </div>
        
        <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;