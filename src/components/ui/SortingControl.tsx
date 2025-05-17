
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ArrowUp, ArrowDown, Filter } from 'lucide-react';

export type SortOption = 'latest' | 'oldest' | 'popular';

interface SortingControlProps {
  activeSort: SortOption;
  onChange: (value: SortOption) => void;
}

const SortingControl: React.FC<SortingControlProps> = ({ activeSort, onChange }) => {
  const handleValueChange = (value: string) => {
    if (value) {
      onChange(value as SortOption);
    }
  };

  return (
    <div className="flex justify-end mb-6">
      <ToggleGroup 
        type="single" 
        value={activeSort}
        onValueChange={handleValueChange}
        className="border rounded-md overflow-hidden"
      >
        <ToggleGroupItem 
          value="latest" 
          className="flex items-center gap-1 px-3 py-1 text-sm"
          aria-label="Sort by latest"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Latest</span>
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="oldest" 
          className="flex items-center gap-1 px-3 py-1 text-sm"
          aria-label="Sort by oldest"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Oldest</span>
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="popular" 
          className="flex items-center gap-1 px-3 py-1 text-sm"
          aria-label="Sort by popularity"
        >
          <Filter className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Popular</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default SortingControl;
