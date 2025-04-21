import React from "react";

interface FeatureFlipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

const FeatureFlipCard: React.FC<FeatureFlipCardProps> = ({
  icon,
  title,
  description,
  color,
  delay = 0,
}) => {
  return (
    <div
      className="flip-card group relative w-full h-48 md:h-56 cursor-pointer"
      style={{ animationDelay: `${delay + 0.5}s` }}
    >
      <div className="flip-card-inner w-full h-full transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front */}
        <div
          className={`flip-card-front absolute w-full h-full ${color} rounded-lg flex flex-col items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-xl overflow-hidden`}
        >
          <div className="mb-2">{icon}</div>
          <h3 className="font-newsreader text-xl font-medium text-primary">{title}</h3>
        </div>
        {/* Back */}
        <div className="flip-card-back absolute w-full h-full bg-white/80 rounded-lg flex items-center justify-center px-6 py-4 shadow-md rotate-y-180 overflow-hidden backdrop-blur-md">
          <p className="text-gray-700 text-center text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureFlipCard;

