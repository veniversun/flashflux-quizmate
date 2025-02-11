import React from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  Icon: LucideIcon;
  title: string;
  path: string;
  onClick: () => void;
}

export const CategoryCard = ({ Icon, title, path, onClick }: CategoryCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-3 rounded-full bg-gradient-to-br from-[#f6d964] to-[#f6d964]/80 shadow-md">
        <Icon className="h-8 w-8 md:h-10 md:w-10 text-[#222222]" />
      </div>
      <Button 
        onClick={onClick}
        className="w-full bg-[#222222] hover:bg-black text-[#f6d964] hover:text-[#f6d964] shadow-md hover:shadow-lg transition-all duration-300"
      >
        {title}
      </Button>
    </div>
  );
};