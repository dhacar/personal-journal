import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JournalPage from './pages/JournalPage';
import Profile from './pages/Profile';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider, useAuth } from './context/AuthContext';
import { JournalProvider } from './context/JournalContext';

function Protected({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="p-6">Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <JournalProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 ">
            <Navbar />
            <div className="max-w-5xl mx-auto p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/journal"
                  element={
                    <Protected>
                      <JournalPage />
                    </Protected>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <Protected>
                      <Dashboard />
                    </Protected>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Protected>
                      <Profile />
                    </Protected>
                  }
                />
                <Route path="*" element={<div>Page not found</div>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </JournalProvider>
    </AuthProvider>
  );
}
