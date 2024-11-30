import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Learnify</h3>
            <p className="text-sm">
              Empowering minds through accessible education. Join our community of lifelong learners today!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
              <li><Link to="/paths" className="hover:text-white transition-colors">Learning Paths</Link></li>
              <li><Link to="/certificates" className="hover:text-white transition-colors">Certificates</Link></li>
              <li><Link to="/mentorship" className="hover:text-white transition-colors">Get Mentorship</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li><Link to="/forums" className="hover:text-white transition-colors">Forums</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/feedback" className="hover:text-white transition-colors">Give Feedback</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Learnify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}