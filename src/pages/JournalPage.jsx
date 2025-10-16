import React from 'react';
import { useJournal } from '../context/JournalContext';
import JournalForm from '../components/JournalForm';
import JournalCard from '../components/JournalCard';

export default function JournalPage() {
  const { entries, loading } = useJournal();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Journal</h2>
      <JournalForm />
      <div className="mt-6 space-y-4">
        {loading ? <div>Loading...</div> : entries.length === 0 ? <div>No entries yet.</div> : entries.map(e => <JournalCard key={e.id} entry={e} />)}
      </div>
    </div>
  );
}
