import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 pt-28 pb-16 px-6">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          About <span className="text-indigo-600">Personal Journal</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A space made for reflection, self-growth, and peace of mind — built to help you 
          connect with your thoughts and track your journey every day.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto mb-20 bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The idea for <strong>Personal Journal</strong> started from a simple need — to 
          create a quiet digital space where people can pause, breathe, and express 
          what’s on their mind without judgment.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We believe writing is one of the most powerful ways to understand yourself. 
          Whether you're recording daily gratitude, reflecting on a tough day, or 
          setting goals for tomorrow — every word you write becomes a step toward growth.
        </p>
      </section>

      {/* Mission / Values Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-8 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Simplicity</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            A clean, distraction-free space for your thoughts. Every detail is designed 
            to help you write effortlessly and focus on what matters most.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-8 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Privacy</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your words belong to you — and only you. We protect your data so you can 
            write freely and feel safe in your digital journal.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-8 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Growth</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We’re here to support your journey. Small, honest reflections can lead to 
            big personal transformations over time.
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Personal Journal — Made with 💜 for reflection & growth.
      </div>
    </div>
  );
}
