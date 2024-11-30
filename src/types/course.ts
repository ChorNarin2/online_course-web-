export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}