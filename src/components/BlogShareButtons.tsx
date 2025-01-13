import { Share2 } from "lucide-react";
import { Button } from "./ui/button";

export interface BlogShareButtonsProps {
  title: string;
  url: string;
}

export const BlogShareButtons = ({ title, url }: BlogShareButtonsProps) => {
  const shareUrl = new URL(url).toString(); // This will properly format the URL

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url: shareUrl,
        });
        console.log("Content shared successfully");
      } else {
        // Fallback for browsers that don't support the Web Share API
        await navigator.clipboard.writeText(shareUrl);
        console.log("URL copied to clipboard");
      }
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
      onClick={handleShare}
    >
      <Share2 className="h-4 w-4" />
      <span>Share</span>
    </Button>
  );
};