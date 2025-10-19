import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await signUp(email, password);
      if (error) throw error;
      alert('Check your email to confirm (if required). You can log in now.');
      nav('/login');
    } catch (err) {
      alert(err.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6  rounded shadow">
      <h2 className="text-xl font-semibold p-1 mb-3">Sign up</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <div className="flex justify-between items-center">
          <Link to="/login" className="text-sm text-blue-600">Already have account?</Link>
          <button disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded">{loading ? 'Signing up...' : 'Sign up'}</button>
        </div>
      </form>
    </div>
  );
}
