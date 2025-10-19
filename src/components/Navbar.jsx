import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const nav = useNavigate();

  async function handleSignOut() {
    await signOut();
    nav('/');
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        
        {/* Logo + Links */}
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-indigo-600 tracking-tight hover:text-indigo-700 transition"
          >
            Personal Journal
          </Link>

          <div className="hidden sm:flex items-center space-x-6 text-gray-700 font-medium">
            <Link to="/journal" className="hover:text-indigo-600 transition">Journal</Link>
            <Link to="/dashboard" className="hover:text-indigo-600 transition">Dashboard</Link>
            <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
          </div>
        </div>

        {/* User Auth Section */}
        <div>
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 hidden sm:inline">{user.email}</span>
              <Link to="/profile" className="text-sm hover:text-indigo-600 transition">Profile</Link>
              <button 
                onClick={handleSignOut} 
                className="text-sm text-red-500 hover:text-red-600 transition px-3"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="space-x-4 font-medium">
              <Link to="/login" className="text-sm hover:text-indigo-600 transition">Login</Link>
              <Link 
                to="/signup" 
                className="text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-lg shadow-sm transition  justify-center items-center"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
