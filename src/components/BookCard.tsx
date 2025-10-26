import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, BookOpen, Star, Bookmark } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  semester: string;
  condition: string;
  subject: string;
  imageUrl: string;
  ownerName: string;
  ownerAvatar?: string;
  rating: number;
  onChat?: () => void;
  onRequest?: () => void;
}

const BookCard = ({
  title,
  author,
  semester,
  condition,
  subject,
  imageUrl,
  ownerName,
  ownerAvatar,
  rating,
  onChat,
  onRequest,
}: BookCardProps) => {
  const getConditionColor = (condition: string) => {
    const colors: Record<string, string> = {
      new: "bg-green-500",
      excellent: "bg-blue-500",
      good: "bg-yellow-500",
      acceptable: "bg-orange-500",
      poor: "bg-red-500",
    };
    return colors[condition.toLowerCase()] || "bg-gray-500";
  };

  return (
    <Card className="group hover-lift overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Condition indicator */}
        <div className={`absolute top-3 left-3 w-3 h-3 rounded-full ${getConditionColor(condition)} shadow-lg animate-pulse-glow`} />
        
        {/* Bookmark button */}
        <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
          <Bookmark className="w-5 h-5 text-primary" />
        </button>
      </div>

      <CardHeader className="pb-3">
        {/* Title & Author */}
        <div className="space-y-1">
          <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{author}</p>
        </div>

        {/* Metadata badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="secondary" className="text-xs">
            Semester {semester}
          </Badge>
          <Badge variant="outline" className="text-xs capitalize">
            {condition}
          </Badge>
          <Badge className="text-xs bg-accent">
            {subject}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="py-3">
        {/* Owner info */}
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8 border-2 border-primary/20">
            <AvatarImage src={ownerAvatar} />
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
              {ownerName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{ownerName}</p>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-muted-foreground">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-4 flex gap-2">
        <Button
          variant="gradient"
          className="flex-1"
          onClick={onChat}
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Chat
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={onRequest}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Request
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
