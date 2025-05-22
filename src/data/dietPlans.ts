import { DietPlan } from '../types';

export const dietPlans: DietPlan[] = [
  {
    id: 1,
    name: 'Balanced Essentials',
    description: 'A balanced approach to healthy eating with a mix of all food groups in appropriate portions.',
    features: [
      'Personalized calorie targets',
      'Weekly meal plans',
      'Shopping lists',
      'Basic nutrition education',
      '30+ recipes'
    ],
    price: 29,
    popular: false
  },
  {
    id: 2,
    name: 'Weight Management Pro',
    description: 'Designed for sustainable weight loss with calorie control and nutrient-dense foods.',
    features: [
      'Custom calorie deficit calculation',
      'Weekly meal plans with options',
      'Progress tracking tools',
      'Nutrition & behavior coaching',
      '100+ recipes',
      'Weekly check-ins'
    ],
    price: 49,
    popular: true
  },
  {
    id: 3,
    name: 'Plant-Based Power',
    description: 'A complete plant-based nutrition plan focusing on whole foods and proper nutrient balance.',
    features: [
      'Vegan/vegetarian meal plans',
      'Plant protein optimization',
      'Nutrient deficiency prevention',
      'Supplementation guidance',
      '75+ plant-based recipes',
      'Monthly consultation'
    ],
    price: 39,
    popular: false
  }
];