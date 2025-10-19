import React, { useState } from 'react';
import { useJournal } from '../context/JournalContext';

export default function JournalCard({ entry }) {
  const { updateEntry, deleteEntry } = useJournal();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(entry.title);
  const [content, setContent] = useState(entry.content);
  const [loading, setLoading] = useState(false);

  async function handleSave(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await updateEntry(entry.id, { title, content });
      setEditing(false);
    } catch (err) {
      alert(err.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!confirm('Delete this entry?')) return;
    try {
      await deleteEntry(entry.id);
    } catch (err) {
      alert(err.message || 'Delete failed');
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      {editing ? (
        <form onSubmit={handleSave} className="space-y-3">
          <input className="w-full border rounded p-2" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <textarea className="w-full border rounded p-2 h-28" value={content} onChange={(e)=>setContent(e.target.value)} />
          <div className="flex justify-between">
            <button type="button" onClick={()=>setEditing(false)} className="px-3 py-2 border rounded">Cancel</button>
            <button type="submit" disabled={loading} className="px-3 py-2 bg-green-600 text-white rounded">{loading ? 'Saving...' : 'Save'}</button>
          </div>
        </form>
      ) : (
        <>
          <h3 className="text-xl font-semibold">{entry.title}</h3>
          <p className="text-gray-700 mt-2 whitespace-pre-wrap">{entry.content}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="text-sm text-gray-500">{new Date(entry.created_at).toLocaleString()}</p>
            <div className="space-x-2">
              <button onClick={() => setEditing(true)} className="cursor-pointer text-sm px-2 py-1 border rounded">Edit</button>
              <button onClick={handleDelete} className="cursor-pointer text-sm px-2 py-1 border rounded text-red-600">Delete</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
