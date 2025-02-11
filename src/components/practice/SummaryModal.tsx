import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SummaryModal = ({ isOpen, onClose }: SummaryModalProps) => {
  const { data: summary, isLoading } = useQuery({
    queryKey: ["summary", 3],
    queryFn: async () => {
      console.log('Fetching summary with id 3');
      const { data, error } = await supabase
        .from('resumos')
        .select('*')
        .eq('id', 3)
        .single();
      
      if (error) {
        console.error('Error fetching summary:', error);
        throw error;
      }
      
      console.log('Fetched summary:', data);
      return data;
    },
  });

  const formatIdeas = (ideas: string | null) => {
    if (!ideas) return '';
    try {
      // Parse the string to get an array
      const ideasArray = JSON.parse(ideas);
      // Format each idea as a bullet point, removing quotes
      return ideasArray
        .map(idea => `• ${idea.replace(/"/g, '')}`)
        .join('\n');
    } catch (e) {
      // If parsing fails, return the original string with basic formatting
      return ideas
        .replace(/[\[\]"]/g, '') // Remove brackets and quotes
        .replace(/,/g, '\n• ') // Replace commas with newline and bullet point
        .replace(/^/, '• '); // Add bullet point to the first line
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Resumo do Livro</DialogTitle>
        </DialogHeader>
        {isLoading ? (
          <div className="p-4">Carregando...</div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Resumo do Livro:</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{summary?.resumo}</p>
            </div>
            {summary?.ideias && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Principais Ideias:</h3>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {formatIdeas(summary.ideias)}
                </p>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};