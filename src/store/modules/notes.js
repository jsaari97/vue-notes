import uuid from "@/utils/id";

const NotesModule = {
  state: () => ({
    // shape: [{ id: number; title: string; content: string }]
    notes: [],
  }),

  mutations: {
    addNote(state, payload) {
      state.notes = [...state.notes, { ...payload, id: uuid() }];
    },

    setNotes(state, payload) {
      state.notes = payload;
    },

    removeNote(state, { id }) {
      state.notes = state.notes.filter((note) => note.id !== id);
    },

    updateNote(state, payload) {
      const index = state.notes.findIndex((note) => note.id === payload.id);

      if (index === -1) {
        return;
      }

      state.notes[index] = payload;
    },

    clearNotes(state) {
      state.notes = [];
    },
  },

  actions: {
    loadNotes({ commit }) {
      const notes = window.localStorage.getItem("notes");

      if (notes) {
        commit("setNotes", JSON.parse(notes));
      } else {
        // add example notes
        commit("setNotes", [
          {
            id: uuid(),
            title: "Note #1",
            content: "Hello world!",
          },
          {
            id: uuid(),
            title: "Note #2",
            content: "Hello world!",
          },
        ]);
      }
    },

    saveNotes({ state }) {
      window.localStorage.setItem("notes", JSON.stringify(state.notes));
    },

    clearNotes({ commit, dispatch }) {
      commit("clearNotes");

      dispatch("saveNotes");
    },
  },
};

export default NotesModule;
