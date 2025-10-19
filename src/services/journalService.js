import { supabase } from "./supabaseClient";

export async function getJournals() {
  const { data, error } = await supabase
    .from("journals")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function addJournal({ title, content, user_id }) {
  const { data, error } = await supabase
    .from("journals")
    .insert([{ title, content, user_id }]);
  if (error) throw error;
  return data;
}

export async function deleteJournal(id) {
  const { error } = await supabase.from("journals").delete().eq("id", id);
  if (error) throw error;
}

export async function getProfile(user_id) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user_id)
    .single();
  if (error) throw error;
  return data;
}
