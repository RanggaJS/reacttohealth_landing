import React from 'react';
import { Check } from 'lucide-react';
import { DietPlan } from '../../types';

interface PlanCardProps {
  plan: DietPlan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-green-600"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        
        <div className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <p className="ml-3 text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-4 pb-6">
          <div className="flex items-baseline">
            {plan.popular && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                Popular
              </span>
            )}
            <span className="text-2xl font-bold text-gray-800">${plan.price}</span>
            <span className="text-gray-500 ml-1">/month</span>
          </div>
        </div>
        
        <button className={`w-full py-3 rounded-md font-medium transition-colors ${
          plan.popular 
            ? 'bg-green-600 hover:bg-green-700 text-white' 
            : 'bg-white border-2 border-green-600 text-green-600 hover:bg-green-50'
        }`}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PlanCard;