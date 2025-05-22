import React from 'react';
import SectionTitle from './ui/SectionTitle';
import PlanCard from './ui/PlanCard';
import { dietPlans } from '../data/dietPlans';

const PlansSection: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Diet Plans"
          subtitle="Choose a plan that fits your lifestyle and health goals"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dietPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        
        <div className="mt-16 bg-green-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Need a Personalized Diet Plan?
              </h3>
              <p className="text-gray-600 mb-6">
                Our nutrition experts can create a customized diet plan based on your health goals, 
                food preferences, and lifestyle. Get started with a personalized consultation today.
              </p>
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors">
                Schedule a Consultation
              </button>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nutritionist with client"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;