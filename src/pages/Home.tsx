import { useEffect, useState } from 'react';
import { CourseCard } from '../components/CourseCard';
import { FAQ } from '../components/FAQ';
import { Hero } from '../components/Hero';
import { NavigationBanner } from '../components/NavigationBanner';
import { TrustedCompanies } from '../components/TrustedCompanies';
import { Course } from '../types/course';

const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp 2024',
    instructor: 'Sarah Johnson',
    description: 'Learn web development from scratch. Master HTML, CSS, JavaScript, React, and Node.js.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    price: 89.99,
    rating: 4.8,
    students: 15420,
    duration: '52 hours',
    level: 'Beginner'
  },
  {
    id: '2',
    title: 'Advanced Machine Learning & AI',
    instructor: 'Dr. CHOR NARIN',
    description: 'Deep dive into machine learning algorithms, neural networks, and artificial intelligence.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    price: 129.99,
    rating: 4.9,
    students: 8750,
    duration: '45 hours',
    level: 'Advanced'
  },
  {
    id: '4',
    title: 'Spring boot Development full course',
    instructor: 'Emily Parker',
    description: 'Master SEO, social media marketing, content strategy, and digital advertising.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    price: 69.99,
    rating: 4.7,
    students: 12300,
    duration: '38 hours',
    level: 'Intermediate'
  }
];

export function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setCourses(MOCK_COURSES);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBanner />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
          <p className="mt-2 text-gray-600">
            Hand-picked courses to get you started on your learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <TrustedCompanies />
      <FAQ />
    </div>
  );
}