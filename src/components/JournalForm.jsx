import React, { useState } from 'react';
import { useJournal } from '../context/JournalContext';

export default function JournalForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addEntry } = useJournal();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setLoading(true);
    try {
      await addEntry({ title, content });
      setTitle('');
      setContent('');
    } catch (err) {
      alert(err.message || 'Failed to save');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
      <input className="w-full border rounded p-2" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <textarea className="w-full border rounded p-2 h-28" placeholder="Write your entry..." value={content} onChange={(e)=>setContent(e.target.value)} />
      <div className="flex justify-end">
        <button disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
          {loading ? 'Saving...' : 'Save Entry'}
        </button>
      </div>
    </form>
  );
}
