import React, { ReactNode } from 'react';

interface NutritionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}

const NutritionCard: React.FC<NutritionCardProps> = ({
  icon,
  title,
  description,
  children,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="ml-3 text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default NutritionCard;