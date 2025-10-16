import React from 'react';
import { useJournal } from '../context/JournalContext';

export default function Dashboard() {
  const { entries } = useJournal();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="bg-white p-4 rounded shadow">
        <p>Total entries: <strong>{entries.length}</strong></p>
        <p>Recent: {entries[0] ? entries[0].title : '—'}</p>
      </div>
    </div>
  );
}
