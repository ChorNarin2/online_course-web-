import { GraduationCap, Rocket, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Learn Without Limits
          </h1>
          <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
            Join our friendly community of learners and start your journey towards success today!
          </p>
          <div className="mt-8">
            <a
              href="#courses"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              Start Learning
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-500 p-3 rounded-full">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Join Community</h3>
              <p className="mt-2 text-indigo-100 text-sm">
                Learn together with millions of students around the world
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-500 p-3 rounded-full">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Expert Teachers</h3>
              <p className="mt-2 text-indigo-100 text-sm">
                Learn from industry experts who care about your success
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-500 p-3 rounded-full">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Grow Skills</h3>
              <p className="mt-2 text-indigo-100 text-sm">
                Advance your career with practical, relevant skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}