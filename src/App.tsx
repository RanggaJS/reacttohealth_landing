import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NutritionSection from './components/NutritionSection';
import RecipesSection from './components/RecipesSection';
import PlansSection from './components/PlansSection';
import BmiCalculator from './components/BmiCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <NutritionSection />
        <RecipesSection />
        <PlansSection />
        <BmiCalculator />
      </main>
      <Footer />
    </div>
  );
}

export default App;