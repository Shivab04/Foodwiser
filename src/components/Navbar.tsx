import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-[#77CDFF]" />
              <span className="ml-2 text-xl font-bold text-[#77CDFF]">Foodwiser</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/register"
              className="btn-primary"
            >
              Sign Up
            </Link>
            <Link
              to="/admin/register"
              className="px-4 py-2 rounded-md text-gray-300 hover:text-white transition-all"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;