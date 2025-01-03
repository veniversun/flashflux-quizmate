import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  imageSrc: string;
  alt: string;
  path: string;
}

export const BookCard = ({ imageSrc, alt, path }: BookCardProps) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    localStorage.removeItem("hasVisited");
    navigate(path);
  };

  return (
    <div onClick={handleBookClick} className="cursor-pointer">
      <div className="relative group transition-all duration-300">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img 
            src={imageSrc}
            alt={alt}
            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
          <span className="text-white font-medium">Começar</span>
        </div>
      </div>
    </div>
  );
};