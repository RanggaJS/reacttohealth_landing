import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import RecipeCard from './ui/RecipeCard';
import { recipes } from '../data/recipes';

type DietType = 'all' | 'vegetarian' | 'vegan' | 'keto' | 'paleo';

const RecipesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<DietType>('all');
  
  const filteredRecipes = activeFilter === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.dietType === activeFilter);

  return (
    <section id="recipes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Healthy Recipes"
          subtitle="Discover delicious, nutritious recipes that make healthy eating enjoyable"
        />
        
        <div className="mt-8 flex justify-center flex-wrap gap-2">
          {(['all', 'vegetarian', 'vegan', 'keto', 'paleo'] as DietType[]).map((diet) => (
            <button
              key={diet}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === diet
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter(diet)}
            >
              {diet.charAt(0).toUpperCase() + diet.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors">
            View All Recipes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;