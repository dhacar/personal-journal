import { useState } from "react";
import { addJournal } from "../services/journalService";
import { useJournal } from "../context/JournalContext";

export default function AddJournal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { dispatch } = useJournal();

  async function handleSubmit(e) {
    e.preventDefault();
    const user_id = "test-user"; // replace later with real auth
    const [newJournal] = await addJournal({ title, content, user_id });
    dispatch({ type: "ADD_JOURNAL", payload: newJournal });
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 mb-3 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your thoughts..."
        className="w-full border p-2 mb-3 rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
}
