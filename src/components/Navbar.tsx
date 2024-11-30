import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-indigo-600">Learnify</div>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
            <Link
              to="auth/login"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="auth/signup"
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}