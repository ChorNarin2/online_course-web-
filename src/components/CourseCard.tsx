import { Clock, Heart, Star, Users } from 'lucide-react';
import { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
            {course.level}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-600">{course.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Users className="h-4 w-4 mr-1" />
          <span className="mr-4">{course.students.toLocaleString()} students</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <span className="text-sm text-gray-600">By </span>
            <span className="ml-1 text-sm font-medium hover:text-indigo-600 cursor-pointer">
              {course.instructor}
            </span>
          </div>
          <span className="text-lg font-bold text-indigo-600">${course.price}</span>
        </div>
      </div>
    </div>
  );
}