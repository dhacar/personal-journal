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
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold text-blue-600">Personal Journal</Link>
          <Link to="/journal" className="text-sm hover:text-blue-600">Journal</Link>
          <Link to="/dashboard" className="text-sm hover:text-blue-600">Dashboard</Link>
          <Link to="/about" className="text-sm hover:text-blue-600">About</Link>
        </div>
        <div>
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">{user.email}</span>
              <Link to="/profile" className="text-sm hover:text-blue-600">Profile</Link>
              <button onClick={handleSignOut} className="text-sm text-red-500 px-3">Sign out</button>
            </div>
          ) : (
            <div className="space-x-3">
              <Link to="/login" className="text-sm hover:text-blue-600">Login</Link>
              <Link to="/signup" className="text-sm hover:text-blue-600">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
