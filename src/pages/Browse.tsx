import { useState } from "react";
import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for demonstration
const mockBooks = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    semester: "3",
    condition: "excellent",
    subject: "Computer Science",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
    ownerName: "Sarah Mitchell",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Organic Chemistry",
    author: "Paula Yurkanis Bruice",
    semester: "2",
    condition: "good",
    subject: "Chemistry",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    ownerName: "Mike Chen",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    semester: "1",
    condition: "new",
    subject: "Economics",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
    ownerName: "Emma Rodriguez",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    rating: 5.0,
  },
  {
    id: 4,
    title: "Physics for Scientists",
    author: "Raymond A. Serway",
    semester: "2",
    condition: "good",
    subject: "Physics",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400",
    ownerName: "James Wilson",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    rating: 4.8,
  },
  {
    id: 5,
    title: "Calculus Early Transcendentals",
    author: "James Stewart",
    semester: "1",
    condition: "excellent",
    subject: "Mathematics",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
    ownerName: "Lisa Anderson",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    rating: 4.9,
  },
  {
    id: 6,
    title: "Biology: Life on Earth",
    author: "Gerald Audesirk",
    semester: "1",
    condition: "acceptable",
    subject: "Biology",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
    ownerName: "David Kim",
    ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 4.6,
  },
];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSemester, setSelectedSemester] = useState<string>("all");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedCondition, setSelectedCondition] = useState<string>("all");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page header */}
      <div className="pt-24 pb-12 px-4 gradient-hero">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
              Browse Books
            </h1>
            <p className="text-xl text-white/80 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Find the perfect textbooks for your courses
            </p>

            {/* Search bar */}
            <div className="relative max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by title, author, or course code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-12 pr-4 text-lg bg-white border-0 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and results */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-card rounded-2xl border-2 shadow-lg">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filters:</span>
            </div>
            
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Semesters</SelectItem>
                <SelectItem value="1">Semester 1</SelectItem>
                <SelectItem value="2">Semester 2</SelectItem>
                <SelectItem value="3">Semester 3</SelectItem>
                <SelectItem value="4">Semester 4</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Condition</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="excellent">Excellent</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="acceptable">Acceptable</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="ghost" onClick={() => {
              setSelectedSemester("all");
              setSelectedSubject("all");
              setSelectedCondition("all");
              setSearchQuery("");
            }}>
              Clear All
            </Button>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Found <span className="font-semibold text-foreground">{mockBooks.length}</span> books
            </p>
          </div>

          {/* Books grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockBooks.map((book, index) => (
              <div
                key={book.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <BookCard
                  {...book}
                  onChat={() => console.log("Chat with", book.ownerName)}
                  onRequest={() => console.log("Request", book.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
