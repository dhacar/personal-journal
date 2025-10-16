import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      {user ? (
        <div className="bg-white p-4 rounded shadow">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.id}</p>
        </div>
      ) : (
        <div>Please login.</div>
      )}
    </div>
  );
}
