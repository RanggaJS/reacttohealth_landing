import React from 'react';
import { Leaf, Heart, Activity } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import NutritionCard from './ui/NutritionCard';

const NutritionSection: React.FC = () => {
  return (
    <section id="nutrition" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Nutrition Essentials"
          subtitle="Understanding the fundamentals of nutrition is key to making healthier food choices"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NutritionCard
            icon={<Leaf className="w-10 h-10 text-green-600" />}
            title="Macronutrients"
            description="Learn about carbohydrates, proteins, and fats — the building blocks of your diet that provide energy and support bodily functions."
          >
            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Carbohydrates</span>
                <span className="text-green-600 font-medium">45-65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '55%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Proteins</span>
                <span className="text-green-600 font-medium">15-25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Fats</span>
                <span className="text-green-600 font-medium">20-35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </NutritionCard>
          
          <NutritionCard
            icon={<Heart className="w-10 h-10 text-green-600" />}
            title="Micronutrients"
            description="Discover vitamins and minerals that support immunity, bone health, energy production, and other vital functions in your body."
          >
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-800">Vitamin A</h4>
                <p className="text-sm text-gray-600">Supports vision & immunity</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-800">Vitamin C</h4>
                <p className="text-sm text-gray-600">Antioxidant protection</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-800">Vitamin D</h4>
                <p className="text-sm text-gray-600">Bone health & immunity</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-800">Iron</h4>
                <p className="text-sm text-gray-600">Oxygen transportation</p>
              </div>
            </div>
          </NutritionCard>
          
          <NutritionCard
            icon={<Activity className="w-10 h-10 text-green-600" />}
            title="Hydration"
            description="Understand the importance of proper hydration for digestion, nutrient absorption, temperature regulation, and overall health."
          >
            <div className="mt-4">
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 36 36" className="w-32 h-32 transform -rotate-90">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-2xl font-bold text-green-600">75%</span>
                    <p className="text-xs text-gray-600">of daily target</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-700">
                Aim for 8-10 glasses (2-2.5 liters) of water daily for optimal health.
              </p>
            </div>
          </NutritionCard>
        </div>
        
        <div className="mt-16 bg-green-50 rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-gray-800">Quick Nutrition Tips</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="font-bold text-green-600">1</span>
              </div>
              <p className="ml-4 text-gray-700">Prioritize whole foods over processed foods for more nutrients and fewer additives.</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="font-bold text-green-600">2</span>
              </div>
              <p className="ml-4 text-gray-700">Include a variety of colorful fruits and vegetables to ensure a wide range of nutrients.</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="font-bold text-green-600">3</span>
              </div>
              <p className="ml-4 text-gray-700">Don't skip meals — regular eating helps maintain energy and prevents overeating later.</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="font-bold text-green-600">4</span>
              </div>
              <p className="ml-4 text-gray-700">Read nutrition labels to make informed choices about packaged foods.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;