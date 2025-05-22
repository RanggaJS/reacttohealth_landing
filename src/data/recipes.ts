import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Mediterranean Quinoa Bowl',
    description: 'A protein-packed bowl with quinoa, roasted vegetables, and tahini dressing.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 25,
    calories: 420,
    rating: 4.8,
    dietType: 'vegetarian'
  },
  {
    id: 2,
    title: 'Avocado & Egg Breakfast Toast',
    description: 'Whole grain toast topped with smashed avocado, poached eggs, and microgreens.',
    image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15,
    calories: 350,
    rating: 4.6,
    dietType: 'vegetarian'
  },
  {
    id: 3,
    title: 'Coconut Curry Lentil Soup',
    description: 'Creamy, spiced soup with red lentils, coconut milk, and fresh herbs.',
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 30,
    calories: 310,
    rating: 4.7,
    dietType: 'vegan'
  },
  {
    id: 4,
    title: 'Grilled Salmon with Asparagus',
    description: 'Omega-3 rich salmon fillet with lemon, herbs, and grilled asparagus.',
    image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 20,
    calories: 380,
    rating: 4.9,
    dietType: 'keto'
  },
  {
    id: 5,
    title: 'Sweet Potato & Black Bean Burrito',
    description: 'A hearty, fiber-filled vegetarian burrito with roasted sweet potatoes and spiced black beans.',
    image: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 35,
    calories: 450,
    rating: 4.5,
    dietType: 'vegan'
  },
  {
    id: 6,
    title: 'Apple Cinnamon Overnight Oats',
    description: 'Rolled oats soaked with almond milk, fresh apples, cinnamon, and a touch of maple syrup.',
    image: 'https://images.pexels.com/photos/4916561/pexels-photo-4916561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10,
    calories: 320,
    rating: 4.3,
    dietType: 'paleo'
  }
];