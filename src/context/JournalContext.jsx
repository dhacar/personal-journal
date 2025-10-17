import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { supabase } from '../services/supabaseClient';
import journalReducer, { initialState } from '../reducers/journalReducer';
import { useAuth } from './AuthContext';

const JournalContext = createContext();

export function JournalProvider({ children }) {
  const [state, dispatch] = useReducer(journalReducer, initialState);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      dispatch({ type: 'FETCH_SUCCESS', payload: [] });
      return;
    }
    fetchEntries();
    // subscribe to realtime changes
    const sub = supabase
      .channel('public:entries')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'entries', filter: `user_id=eq.${user.id}` },
        (payload) => {
          // handle insert/update/delete
          const { eventType, new: newRow, old: oldRow } = payload;
          if (payload.eventType === 'INSERT') dispatch({ type: 'ADD_ENTRY', payload: newRow });
          if (payload.eventType === 'UPDATE') dispatch({ type: 'UPDATE_ENTRY', payload: newRow });
          if (payload.eventType === 'DELETE') dispatch({ type: 'DELETE_ENTRY', payload: oldRow.id });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(sub);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function fetchEntries() {
    if (!user) return;
    try {
      dispatch({ type: 'FETCH_START' });
      const { data, error } = await supabase
        .from('entries')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (error) throw error;
      dispatch({ type: 'FETCH_SUCCESS', payload: data || [] });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message || err });
    }
  }

  async function addEntry({ title, content }) {
    if (!user) throw new Error('Not authenticated');
    const { data, error } = await supabase
      .from('entries')
      .insert([{ title, content, user_id: user.id }])
      .select();
    if (error) throw error;
    // server realtime will also push the insert, but add locally for immediate feedback:
    dispatch({ type: 'ADD_ENTRY', payload: data[0] });
    return data[0];
  }

  async function updateEntry(id, updates) {
    const { data, error } = await supabase
      .from('entries')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select();
    if (error) throw error;
    dispatch({ type: 'UPDATE_ENTRY', payload: data[0] });
    return data[0];
  }

  async function deleteEntry(id) {
    const { error } = await supabase.from('entries').delete().eq('id', id);
    if (error) throw error;
    dispatch({ type: 'DELETE_ENTRY', payload: id });
  }

  return (
    <JournalContext.Provider value={{ ...state, fetchEntries, addEntry, updateEntry, deleteEntry }}>
      {children}
    </JournalContext.Provider>
  );
}

export function useJournal() {
  return useContext(JournalContext);
}
