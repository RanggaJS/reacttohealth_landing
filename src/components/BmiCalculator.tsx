import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

interface BmiResult {
  bmi: number;
  category: string;
  color: string;
}

const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [result, setResult] = useState<BmiResult | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const calculateBmi = () => {
    if (typeof height !== 'number' || typeof weight !== 'number' || height <= 0 || weight <= 0) {
      return;
    }
    
    let bmi: number;
    if (unit === 'metric') {
      // Metric: weight(kg) / (height(m) * height(m))
      bmi = weight / ((height / 100) * (height / 100));
    } else {
      // Imperial: (weight(lb) * 703) / (height(in) * height(in))
      bmi = (weight * 703) / (height * height);
    }
    
    bmi = Math.round(bmi * 10) / 10;
    
    let category: string;
    let color: string;
    
    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-600';
    } else if (bmi < 25) {
      category = 'Normal weight';
      color = 'text-green-600';
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'text-yellow-600';
    } else {
      category = 'Obesity';
      color = 'text-red-600';
    }
    
    setResult({ bmi, category, color });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBmi();
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setResult(null);
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="BMI Calculator"
          subtitle="Calculate your Body Mass Index to get a general idea of your weight category"
        />
        
        <div className="mt-12 max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-green-600">
              <h3 className="text-xl font-bold text-white mb-2">
                What is BMI?
              </h3>
              <p className="text-green-100 mb-4">
                Body Mass Index (BMI) is a measurement of a person's weight with respect to their height. It's a common 
                screening tool to identify potential weight problems in adults.
              </p>
              <h4 className="text-white font-medium mb-2">BMI Categories:</h4>
              <ul className="space-y-2 text-green-100">
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                  Underweight: &lt; 18.5
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                  Normal weight: 18.5 - 24.9
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  Overweight: 25 - 29.9
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  Obesity: ≥ 30
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${
                          unit === 'metric' ? 'bg-white shadow-sm' : 'text-gray-700'
                        }`}
                        onClick={() => setUnit('metric')}
                      >
                        Metric
                      </button>
                      <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${
                          unit === 'imperial' ? 'bg-white shadow-sm' : 'text-gray-700'
                        }`}
                        onClick={() => setUnit('imperial')}
                      >
                        Imperial
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="height">
                      Height ({unit === 'metric' ? 'cm' : 'inches'})
                    </label>
                    <input
                      id="height"
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={height}
                      onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))}
                      required
                      min="1"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="weight">
                      Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                    </label>
                    <input
                      id="weight"
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))}
                      required
                      min="1"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button type="submit" variant="primary" className="flex-1">
                    Calculate BMI
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Reset
                  </Button>
                </div>
              </form>
              
              {result && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-gray-800 font-medium mb-2">Your BMI Result:</h4>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold mr-2">{result.bmi}</span>
                    <span className={`font-medium ${result.color}`}>
                      ({result.category})
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Remember that BMI is a general guideline and doesn't account for factors like muscle mass, bone density, and overall body composition.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;