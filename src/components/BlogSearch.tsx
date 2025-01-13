import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export const BlogSearch = ({ onSearch }: BlogSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Rechercher des articles..."
        className="pl-10"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};