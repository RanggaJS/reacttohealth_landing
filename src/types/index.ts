export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  calories: number;
  rating: number;
  dietType: 'vegetarian' | 'vegan' | 'keto' | 'paleo';
}

export interface DietPlan {
  id: number;
  name: string;
  description: string;
  features: string[];
  price: number;
  popular: boolean;
}