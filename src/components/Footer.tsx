import React from 'react';
import { Apple, Facebook, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Apple className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">NutriLife</span>
            </div>
            <p className="text-gray-400 mb-6">
              Helping you make better nutritional choices for a healthier, happier life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#nutrition" className="text-gray-400 hover:text-white transition-colors">Nutrition</a>
              </li>
              <li>
                <a href="#recipes" className="text-gray-400 hover:text-white transition-colors">Recipes</a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-white transition-colors">Diet Plans</a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-white transition-colors">BMI Calculator</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Nutrition Guide</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Meal Planning</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Calorie Calculator</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Workout Tips</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Get weekly nutrition tips and healthy recipes delivered to your inbox.
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 flex-1"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 rounded-r-md transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NutriLife. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;