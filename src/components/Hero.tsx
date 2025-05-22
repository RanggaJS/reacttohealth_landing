import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-gradient-to-br from-green-50 to-teal-50"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Discover the <span className="text-green-600">Healthier</span> Way to Eat
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Personalized nutrition guidance, delicious recipes, and achievable diet plans to transform your relationship with food.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                View Diet Plans
              </Button>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-green-600">1000+</span>
                <span className="ml-2 text-gray-600">Healthy Recipes</span>
              </div>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-green-600">50k+</span>
                <span className="ml-2 text-gray-600">Happy Users</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
              <img
                src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Healthy food plate with veggies"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Scientifically Backed</p>
                  <p className="text-sm text-gray-500">Nutrition advice you can trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute top-1/3 -right-16 w-64 h-64 bg-green-200 rounded-full opacity-20" />
      <div className="hidden md:block absolute bottom-1/4 -left-20 w-80 h-80 bg-teal-200 rounded-full opacity-20" />
    </section>
  );
};

export default Hero;