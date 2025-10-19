import React from 'react';
import { useJournal } from '../context/JournalContext';

export default function Dashboard() {
  const { entries } = useJournal();

  return (
    <div className="min-h-screen  flex flex-col items-center px-4 py-8">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-6 text-center">
          Dashboard
        </h2>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Total Entries:</span>
            <span className="text-gray-900 font-semibold">{entries.length}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Most Recent:</span>
            <span className="text-gray-900">
              {entries[0] ? entries[0].title : '—'}
            </span>
          </div>

          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg cursor-pointer transition">
            Add New Entry
          </button>
        </div>
      </div>
    </div>
  );
}
