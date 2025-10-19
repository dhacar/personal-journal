import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Profile
        </h2>

        {user ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-gray-600 font-medium">Email:</span>
              <span className="text-gray-900">{user.email}</span>
              
            </div>

            
          </div>
        ) : (
          <div className="text-center text-gray-600">
            Please log in to view your profile.
          </div>
        )}
      </div>
    </div>
  );
}
