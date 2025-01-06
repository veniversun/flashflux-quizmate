import { Button } from "@/components/ui/button";
import { Home, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

interface PracticeHeaderProps {
  title: string;
}

export const PracticeHeader = ({ title }: PracticeHeaderProps) => {
  const updatedTitle = title.replace("Pratique", "Treine");

  return (
    <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
      <h1 className="text-3xl font-bold">{updatedTitle}</h1>
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          className="bg-orange-500 text-white hover:bg-orange-600"
        >
          <Trophy className="mr-2" /> Conquistas
        </Button>
        <Link to="/">
          <Button variant="outline">
            <Home className="mr-2" /> Início
          </Button>
        </Link>
      </div>
    </div>
  );
};