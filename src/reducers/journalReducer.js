export const initialState = {
  entries: [],
  loading: false,
  error: null,
};

export default function journalReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, entries: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_ENTRY':
      return { ...state, entries: [action.payload, ...state.entries] };
    case 'UPDATE_ENTRY':
      return {
        ...state,
        entries: state.entries.map((e) => (e.id === action.payload.id ? action.payload : e)),
      };
    case 'DELETE_ENTRY':
      return { ...state, entries: state.entries.filter((e) => e.id !== action.payload) };
    default:
      return state;
  }
}
