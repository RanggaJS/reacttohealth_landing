import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl text-gray-600">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-20 h-1 bg-green-600 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;